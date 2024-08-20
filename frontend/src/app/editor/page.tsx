import AddButton from '@/components/buttons/AddButton';
import EditZap from '@/components/editor/EditZap';
import { EditorAppbar } from '@/components/editor/EditorAppBar';
import { EditorPublishBar } from '@/components/editor/EditorPublishBar';
import { EditorSideBar } from '@/components/editor/EditorSearchBar';
import EditorZap from '@/components/editor/EditorZap';

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
  return (
    <div className="w-full cursor-grab h-screen bg-[#f7f5f2] flex flex-col gap-1 items-center pt-10">
      <EditorZap first={true} />
      <AddButton />
      <EditorZap />
      <AddButton />
      <EditorZap />
    </div>
  );
}

export default Editor;
