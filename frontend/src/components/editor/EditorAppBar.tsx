'use client';

import { useRouter } from 'next/navigation';
import { BiHomeAlt2, BiSolidZap } from 'react-icons/bi';
import { CiFolderOn } from 'react-icons/ci';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

export function EditorAppbar() {
  const router = useRouter();

  return (
    <div className="flex gap-1 justify-between bg-[#2d2e2e] text-white text-xxxs p-1 py-[6px]">
      <div className="flex gap-3 items-center">
        <p className="p-[2px] border-white border-[1px]">
          <BiHomeAlt2 color="white" size={12} />
        </p>
        <TbGridDots color="white" size={15} />
        <BiSolidZap color="red" size={15} />
        <p className="">Zaps</p>
      </div>
      <div className="flex gap-2 items-center">
        <CiFolderOn size={15} color="white" />
        <button
          onClick={() => {
            router.push('/zaps');
          }}
        >
          Home
        </button>{' '}
        /
        <div className="flex gap-2 items-center">
          <button className="rounded-full bg-[#2d2e2e p-[2px]">SR</button>
          Untitled Zap{' '}
          <p className="text-black bg-[#e9f6dd] px-1 rounded-md">Draft</p>
          <FiChevronDown color="white" size={12} />
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <p>126%</p>
        <p className="flex items-center gap-1">
          <IoIosHelpCircleOutline color="white" size={14} />
          Help
          <FiChevronDown color="white" size={12} />
        </p>
      </div>
    </div>
  );
}
