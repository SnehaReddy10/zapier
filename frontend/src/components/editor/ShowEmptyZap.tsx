'use client';

import { ZapCellType } from '@/types/Zap';
import { FiZap } from 'react-icons/fi';
import { RxDragHandleDots2 } from 'react-icons/rx';

export function EmptyZap({
  type,
  showMoveIcon,
  index,
  onClick,
}: {
  type: ZapCellType;
  showMoveIcon: boolean;
  index: number;
  onClick: (type: ZapCellType) => void;
}) {
  return (
    <div
      className="flex gap-2 items-center"
      onClick={() => {
        onClick(type);
      }}
    >
      <RxDragHandleDots2
        color={`${showMoveIcon ? 'gray' : '#f7f5f2'}`}
        className="cursor-pointer"
      />
      <div className="flex cursor-pointer border-[#2d2e2e] hover:border-[#5949c1] border-dotted active:border-[#5949c1] border-[1px] transition-all ease-linear h-max flex-col rounded-md bg-white shadow-lg text-[#3b3c3c] shadow-gray-200 gap-2 text-xxxs py-2 w-56 px-2 font-semibold">
        <div className="flex gap-2 items-center justify-between">
          <p className="flex items-center px-1 py-[2px] bg-[#e8e7e4] border-[#313232] border-[1px]  cursor-pointer rounded-sm">
            <span className="bg-[#313232] p-[3px] rounded-full mr-1">
              <FiZap color="white" fill="white" size={10} />
            </span>
            <span>{type == ZapCellType.action ? 'Action' : 'Trigger'}</span>
          </p>
        </div>
        <p>
          {index}.
          <span className="text-gray-800">
            {type == ZapCellType.action
              ? 'Select the event for your Zap to run'
              : 'Select the event that runs your Zap'}
          </span>
        </p>
      </div>
    </div>
  );
}
