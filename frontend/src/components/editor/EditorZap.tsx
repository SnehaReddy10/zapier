'use client';

import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { LuClock4 } from 'react-icons/lu';
import { RiErrorWarningFill, RiNotionLine } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';
import AddButton from '../buttons/AddButton';
import { FiZap } from 'react-icons/fi';
import { Action, Trigger, ZapCellType } from '@/types/Zap';

function EditorZap({
  type,
  action,
  trigger,
  index,
  addAction,
  onClick,
}: {
  type: ZapCellType;
  action?: Action;
  trigger?: Trigger;
  index: number;
  addAction: (index: number) => void;
  onClick: (type: ZapCellType) => void;
}) {
  const [showMoveIcon, setShowMoveIcon] = useState(false);

  return (
    <div className="flex gap-2">
      <div
        className="flex flex-col items-center"
        onMouseEnter={() =>
          (action?.action || trigger) && setShowMoveIcon((m) => !m)
        }
        onMouseLeave={() =>
          (action?.action || trigger) && setShowMoveIcon((m) => !m)
        }
      >
        {type == ZapCellType.action && (
          <div className="bg-gradient-to-b from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        )}

        {!action?.action && !trigger && (
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              onClick(type);
            }}
          >
            <RxDragHandleDots2
              color={`${showMoveIcon ? 'gray' : 'gray-50'}`}
              className="cursor-pointer"
            />
            <div className="flex cursor-pointer border-[#2d2e2e] hover:border-[#5949c1] border-dotted active:border-[#5949c1] border-[1px] transition-all ease-linear h-max flex-col rounded-md bg-white shadow-lg text-[#3b3c3c] shadow-gray-200 gap-2 text-xxxs py-2 w-56 px-2 font-semibold">
              <div className="flex gap-2 items-center justify-between">
                <p className="flex items-center px-1 py-[2px] bg-[#e8e7e4] border-[#313232] border-[1px]  cursor-pointer rounded-sm">
                  <span className="bg-[#313232] p-[3px] rounded-full mr-1">
                    <FiZap color="white" fill="white" size={10} />
                  </span>
                  <span>
                    {type == ZapCellType.action ? 'Action' : 'Trigger'}
                  </span>
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
        )}

        {(action?.action || trigger) && (
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              onClick(type);
            }}
          >
            <RxDragHandleDots2
              color={`${showMoveIcon ? 'gray' : 'gray-50'}`}
              className="cursor-pointer"
            />
            <div className="flex cursor-pointer hover:border-[#5949c1] active:border-[#5949c1] border-[1px] transition-all ease-linear h-max flex-col rounded-md bg-white shadow-lg text-[#3b3c3c] shadow-gray-200 gap-2 text-xxxs py-2 w-56 px-2 font-semibold">
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <RiErrorWarningFill
                    color="#ffc43e"
                    fill="#ffc43e"
                    size={18}
                  />
                  <p className="flex gap-1 items-center px-1 py-[2px] border-[#eaeae4] border-[1px]  cursor-pointer">
                    <RiNotionLine size={18} />
                    <span>{trigger?.trigger ?? action?.action}</span>
                  </p>
                  <p className="bg-[#f6ffdb] px-1 py-[2px] border-[1px] border-[#eaeae4] items-center rounded-sm flex gap-1 cursor-pointer">
                    <LuClock4 size={18} />
                    {trigger?.interval ?? action?.interval}
                  </p>
                </div>
                <p className="py-1 px-[2px] border-[1px] hover:bg-[#f7f6fd] border-white rounded-sm cursor-pointer hover:border-[1px] hover:border-[#695be8]">
                  <HiDotsVertical size={18} />
                </p>
              </div>
              <div className="flex gap-2">
                {index}.
                {trigger?.event ?? action?.event ?? (
                  <p className="text-gray-400">Select the event</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-t from-[#5140bf] via-[#5140bf] to-white h-6 w-[2px]"></div>
        <AddButton
          onClick={() => {
            addAction(index);
          }}
        />
      </div>
    </div>
  );
}

export default EditorZap;
