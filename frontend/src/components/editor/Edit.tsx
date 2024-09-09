'use client';

import { createZap, getZapById } from '@/api/zaps';
import { ZapCellType } from '@/types/Zap';
import { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import EditZap from './EditZap';
import EditorZap from './EditorZap';
import { useRouter } from 'next/navigation';

export function Edit({ setCanPublish, publish, zapId }: any) {
  const [trigger, setTrigger] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [actions, setActions] = useState<any>([{ index: currentIndex + 1 }]);
  const [modalType, setModalType] = useState<null | ZapCellType>(null);
  const [showEditZap, setShowEditZap] = useState(false);
  const router = useRouter();

  const handleGetUserZapById = async () => {
    if (!zapId) {
      return;
    }
    const result = await getZapById({
      zapId,
    });
    if (!result.success) {
      return;
    }
    const zap = result.zap;
    setActions(zap.actions);
    setTrigger(zap.trigger);
  };

  useEffect(() => {
    handleGetUserZapById();
  }, [zapId]);

  useEffect(() => {
    const isZapValid =
      trigger?.eventId &&
      actions.every((x: any) => typeof x.eventId != typeof undefined);

    setCanPublish(isZapValid);

    if (publish) {
      createZap({ actions, trigger });
      router.push('/zaps');
    }
  }, [trigger, actions, publish]);

  const addAction = (index: number) => {
    setCurrentIndex(index + 1);
    setActions((x: any) => [...x, { index: index + 1, interval: '2 mins' }]);
  };

  const selectZap = (zap: any, zapType: ZapCellType) => {
    if (zapType == ZapCellType.trigger) {
      setTrigger(() => zap);
    } else if (zapType == ZapCellType.action) {
      setActions((x: any) =>
        x.map((x: any) => (x.index == zap.index ? zap : x))
      );
    }
  };

  const selectEvent = (event: any, zapType?: ZapCellType) => {
    if (zapType == ZapCellType.trigger) {
      setTrigger({ ...trigger, eventName: event.name, eventId: event.id });
    } else if (zapType == ZapCellType.action) {
      setActions((x: any) =>
        x.map((action: any) => {
          if (action.index == currentIndex) {
            return { ...action, eventName: event.name, eventId: event.id };
          }
          return action;
        })
      );
    }
  };

  const setMetadata = (event: any, zapType?: ZapCellType) => {
    if (zapType == ZapCellType.action) {
      setActions((x: any) =>
        x.map((action: any) => {
          if (action.index == currentIndex) {
            return { ...action, metaData: event };
          }
          return action;
        })
      );
    }
  };

  const handleTriggerOnClick = (e: any) => {
    trigger ? setShowEditZap(true) : setModalType(e);
    setCurrentIndex(1);
  };

  const handleActionOnClick = (e: any, x: any) => {
    x.action ? setShowEditZap(true) : setModalType(e);
    setCurrentIndex(x.index);
  };

  return (
    <div className="flex flex-grow max-h-screen">
      <div className="w-full min-h-screen scroll-smooth overflow-y-scroll py-14 no-scrollbar cursor-grab bg-gray-50 flex flex-col gap-1 items-center pt-10">
        <EditorZap
          trigger={trigger}
          addAction={addAction}
          type={ZapCellType.trigger}
          index={1}
          onClick={handleTriggerOnClick}
        />

        {actions.map((x: any, index: number) => (
          <EditorZap
            key={x.id}
            onClick={(e) => handleActionOnClick(e, x)}
            action={x}
            type={ZapCellType.action}
            index={index + 1}
            addAction={addAction}
          />
        ))}

        {modalType != null && (
          <div
            onClick={() => setModalType((m) => null)}
            className="absolute inset-0 flex justify-center items-center z-10 w-full h-full bg-opacity-45 bg-[#555655]"
          >
            <Modal
              index={currentIndex ?? 1}
              type={modalType}
              onSelect={selectZap}
            />
          </div>
        )}
      </div>

      {showEditZap && (
        <EditZap
          setShowModal={setModalType}
          setShowEditZap={setShowEditZap}
          zapType={currentIndex == 1 ? ZapCellType.trigger : ZapCellType.action}
          onEventSelect={selectEvent}
          zap={
            currentIndex == 1
              ? trigger
              : actions.find((x: any) => x.index == currentIndex)
          }
          setMetadata={setMetadata}
        />
      )}
    </div>
  );
}
