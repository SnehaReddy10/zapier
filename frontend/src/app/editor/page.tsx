'use client';

import EditZap from '@/components/editor/EditZap';
import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSideBar';
import EditorZap from '@/components/editor/EditorZap';
import { useEffect, useState } from 'react';
import { ZapCellType } from '@/types/Zap';
import Modal from '@/components/Modal';

function Editor() {
  const [modalType, setModalType] = useState<null | ZapCellType>(null);

  return (
    <div className={`relative h-screen flex justify-center items-center`}>
      <div className={`w-full h-full`}>
        <EditorAppbar />
        <div className="flex">
          <EditorSideBar />
          <div className="w-full">
            <EditorPublishBar />
            <div className="flex">
              <Edit onClick={setModalType} />
              <EditZap />
            </div>
          </div>
        </div>
      </div>
      {modalType != null && (
        <div
          onClick={() => setModalType((m) => null)}
          className="absolute flex justify-center items-center z-10 w-full h-full opacity-45 bg-[#555655]"
        >
          <Modal type={modalType} />
        </div>
      )}
    </div>
  );
}

export function Edit({ onClick }: { onClick: (type: any) => void }) {
  const [trigger, setTrigger] = useState<null | string>(null);
  const [actions, setActions] = useState<any>([]);

  useEffect(() => {}, []);

  const addAction = () => {
    console.log('add action');
    setActions((x: any) => [...x, {}]);
  };

  return (
    <div className="w-full cursor-grab h-screen bg-[#f7f5f2] flex flex-col gap-1 items-center pt-10">
      <EditorZap
        addAction={addAction}
        type={ZapCellType.trigger}
        index={1}
        onClick={onClick}
      />
      {actions.map((x: any, index: number) => (
        <EditorZap
          onClick={onClick}
          action={x.action}
          type={ZapCellType.action}
          index={index}
          addAction={addAction}
        />
      ))}
    </div>
  );
}

export default Editor;
