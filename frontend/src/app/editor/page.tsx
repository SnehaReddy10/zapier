'use client';

import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSideBar';
import { useState } from 'react';
import { Edit } from '@/components/editor/Edit';

function Editor() {
  const [canPublish, setCanPublish] = useState(false);
  const [publish, setPublish] = useState(false);

  return (
    <div className={`relative h-screen overflow-hidden`}>
      <EditorAppbar />
      <div className="flex min-h-screen">
        <EditorSideBar />
        <div className="w-full">
          <EditorPublishBar canPublish={canPublish} setPublish={setPublish} />
          <Edit setCanPublish={setCanPublish} publish={publish} />
        </div>
      </div>
    </div>
  );
}

export default Editor;
