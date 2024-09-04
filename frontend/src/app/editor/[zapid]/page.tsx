'use client';

import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSideBar';
import { useState } from 'react';
import { Edit } from '@/components/editor/Edit';
import { useParams } from 'next/navigation';

function Editor() {
  const params = useParams();
  const zapId = params.zapId;

  const [canPublish, setCanPublish] = useState(false);
  const [publish, setPublish] = useState(false);

  return (
    <div className={`relative h-screen overflow-hidden`}>
      <EditorAppbar />
      <div className="flex min-h-screen">
        <EditorSideBar />
        <div className="w-full">
          <EditorPublishBar canPublish={canPublish} setPublish={setPublish} />
          <Edit zapId={zapId} setCanPublish={setCanPublish} publish={publish} />
        </div>
      </div>
    </div>
  );
}

export default Editor;
