import { FiTool } from 'react-icons/fi';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { LuZap } from 'react-icons/lu';
import { RxHome } from 'react-icons/rx';

export function ModalAppBar() {
  return (
    <div className="flex gap-1 items-center text-black py-2 px-4 border-b-[1px] border-gray-100">
      <div className="p-1 border-[1px] border-double border-purple-700">
        <RxHome size={20} color="#695be8" />
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <HiOutlineSquaresPlus />
        <p>Apps</p>
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <LuZap />
        <p>Zapier products</p>
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <FiTool />
        <p>Built-in tools</p>
      </div>
    </div>
  );
}
