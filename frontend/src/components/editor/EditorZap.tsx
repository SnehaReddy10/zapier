'use client';

import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { LuClock4 } from 'react-icons/lu';
import { RiErrorWarningFill, RiNotionLine } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';

function EditorZap({ first = false }: { first?: boolean }) {
  const [showMoveIcon, setShowMoveIcon] = useState(false);

  return (
    <div className="flex gap-2">
      <div
        className="flex flex-col items-center"
        onMouseEnter={() => setShowMoveIcon((m) => !m)}
        onMouseLeave={() => setShowMoveIcon((m) => !m)}
      >
        {!first && (
          <div className="bg-gradient-to-b from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        )}
        <div className="flex gap-2 items-center">
          <RxDragHandleDots2
            color={`${showMoveIcon ? 'gray' : '#f7f5f2'}`}
            className="cursor-pointer"
          />
          <div className="flex cursor-pointer hover:border-[#5949c1] border-[1px] transition-all ease-linear h-max flex-col rounded-md bg-white shadow-lg text-[#3b3c3c] shadow-gray-200 gap-2 text-xxxs py-2 w-56 px-2 font-semibold">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <RiErrorWarningFill color="#ffc43e" fill="#ffc43e" size={18} />
                <p className="flex items-center px-1 py-[2px] border-[#eaeae4] border-[1px]  cursor-pointer">
                  <RiNotionLine size={18} />
                  <span>Notion</span>
                </p>
                <p className="bg-[#f6ffdb] px-1 py-[2px] border-[1px] border-[#eaeae4] items-center rounded-sm flex gap-1 cursor-pointer">
                  <LuClock4 size={18} />2 min
                </p>
              </div>
              <p className="py-1 px-[2px] border-[1px] hover:bg-[#f7f6fd] border-white rounded-sm cursor-pointer hover:border-[1px] hover:border-[#695be8]">
                <HiDotsVertical size={18} />
              </p>
            </div>
            <p>1. Updated Page</p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        <div className="my-1 text-[#5140bf] hover:cursor-pointer w-5 h-5 flex justify-center items-center hover:text-white transition-all ease-linear hover:bg-[#5140bf] rounded-full">
          +
        </div>
      </div>
    </div>
  );
}

export default EditorZap;
