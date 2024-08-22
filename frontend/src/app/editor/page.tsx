'use client';

import EditZap from '@/components/editor/EditZap';
import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSideBar';
import EditorZap, { ZapCellType } from '@/components/editor/EditorZap';
import { useEffect, useState } from 'react';

function Editor() {
  return (
    <div className="h-screen">
      <EditorAppbar />
      <div className="flex">
        <EditorSideBar />
        <div className="w-full">
          <EditorPublishBar />
          <div className="flex">
            <Edit />
            <EditZap />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Edit() {
  const [trigger, setTrigger] = useState<null | string>(null);
  const [actions, setActions] = useState<any>([]);

  useEffect(() => {}, []);

  const addAction = () => {
    console.log('add action');
    setActions((x: any) => [...x, {}]);
  };

  return (
    <div className="w-full cursor-grab h-screen bg-[#f7f5f2] flex flex-col gap-1 items-center pt-10">
      <EditorZap type={ZapCellType.trigger} index={1} onClick={addAction} />
      {actions.map((x: any, index: number) => (
        <EditorZap
          action={x.action}
          type={ZapCellType.action}
          index={index}
          onClick={addAction}
        />
      ))}
    </div>
  );
}

export default Editor;
