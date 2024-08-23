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
    <div className={`relative h-screen flex justify-center items-center`}>
      <div className={`w-full h-full`}>
        <EditorAppbar />
        <div className="flex">
          <EditorSideBar />
          <div className="w-full">
            <EditorPublishBar />
            <Edit />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Edit() {
  const [trigger, setTrigger] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [actions, setActions] = useState<any>([{ index: currentIndex }]);
  const [modalType, setModalType] = useState<null | ZapCellType>(null);

  const addAction = (index: number) => {
    setCurrentIndex(index + 1);
    setActions((x: any) => [...x, { index: index + 1, interval: '2 mins' }]);
  };

  const selectAction = (action: any) => {
    setActions((x: any) =>
      x.map((x: any) => (x.index == action.index ? action : x))
    );
  };

  const selectTrigger = (newTrigger: any) => {
    setTrigger(() => newTrigger);
  };

  return (
    <div className="flex">
      <div className="w-full cursor-grab h-screen bg-[#f7f5f2] flex flex-col gap-1 items-center pt-10">
        <EditorZap
          trigger={trigger}
          addAction={addAction}
          type={ZapCellType.trigger}
          index={1}
          onClick={(e) => {
            setCurrentIndex(1);
            setModalType(e);
          }}
        />
        {actions.map((x: any, index: number) => (
          <EditorZap
            key={x.id}
            onClick={(e) => {
              setCurrentIndex(x.index);
              setModalType(e);
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
              onSelect={
                modalType == ZapCellType.action ? selectAction : selectTrigger
              }
            />
          </div>
        )}
      </div>

      {(trigger || actions[currentIndex - 1].action) && <EditZap />}
    </div>
  );
}

export default Editor;
