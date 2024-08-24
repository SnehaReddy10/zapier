'use client';

import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSideBar';
import EditorZap from '@/components/editor/EditorZap';
import { useState } from 'react';
import { ZapCellType } from '@/types/Zap';
import Modal from '@/components/Modal';
import EditZap from '@/components/editor/EditZap';

function Editor() {
  return (
    <div className={`relative h-screen overflow-hidden`}>
      <EditorAppbar />
      <div className="flex min-h-screen">
        <EditorSideBar />
        <div className="w-full">
          <EditorPublishBar />
          <Edit />
        </div>
      </div>
    </div>
  );
}

export function Edit() {
  const [trigger, setTrigger] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [actions, setActions] = useState<any>([{ index: currentIndex + 1 }]);
  const [modalType, setModalType] = useState<null | ZapCellType>(null);
  const [showEditZap, setShowEditZap] = useState(false);

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

  const selectEvent = (event: string, zapType?: ZapCellType) => {
    if (zapType == ZapCellType.trigger) {
      setTrigger({ ...trigger, event });
    } else if (zapType == ZapCellType.action) {
      setActions((x: any) =>
        x.map((action: any, index: number) => {
          if (action.index == currentIndex) {
            return { ...action, event };
          }
          return action;
        })
      );
    }
  };

  return (
    <div className="flex flex-grow max-h-screen">
      <div className="w-full min-h-screen scroll-smooth overflow-y-scroll py-14 no-scrollbar cursor-grab bg-gray-50 flex flex-col gap-1 items-center pt-10">
        <EditorZap
          trigger={trigger}
          addAction={addAction}
          type={ZapCellType.trigger}
          index={1}
          onClick={(e) => {
            if (trigger) {
              setShowEditZap(true);
            } else {
              setModalType(e);
            }
            setCurrentIndex(1);
          }}
        />
        {actions.map((x: any, index: number) => (
          <EditorZap
            key={x.id}
            onClick={(e) => {
              if (x.action) {
                setShowEditZap(true);
              } else {
                setModalType(e);
              }
              setCurrentIndex(x.index);
            }}
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
          setShowEditZap={setShowEditZap}
          zapType={currentIndex == 1 ? ZapCellType.trigger : ZapCellType.action}
          onEventSelect={selectEvent}
          id={
            currentIndex == 1
              ? trigger?.id
              : actions.find((x: any) => x.index == currentIndex)?.id
          }
        />
      )}
    </div>
  );
}

export default Editor;
