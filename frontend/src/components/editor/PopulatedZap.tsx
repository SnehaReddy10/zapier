import { ZapCellType, Trigger, Action } from '@/types/Zap';
import { HiDotsVertical } from 'react-icons/hi';
import { LuClock4 } from 'react-icons/lu';
import { RiErrorWarningFill, RiNotionLine } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';

export function PopulatedZap({
  type,
  showMoveIcon,
  index,
  trigger,
  action,
  onClick,
}: {
  type: ZapCellType;
  showMoveIcon: boolean;
  index: number;
  trigger?: Trigger;
  action?: Action;
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
      <div className="flex cursor-pointer hover:border-[#5949c1] active:border-[#5949c1] border-[1px] transition-all ease-linear h-max flex-col rounded-md bg-white shadow-lg text-[#3b3c3c] shadow-gray-200 gap-2 text-xxxs py-2 w-56 px-2 font-semibold">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <RiErrorWarningFill color="#ffc43e" fill="#ffc43e" size={18} />
            <p className="flex gap-1 items-center px-1 py-[2px] border-[#eaeae4] border-[1px]  cursor-pointer">
              <RiNotionLine size={18} />
              <span>{trigger?.trigger ?? action?.action}</span>
            </p>
            {type == ZapCellType.trigger && (
              <p className="bg-[#f6ffdb] px-1 py-[2px] border-[1px] border-[#eaeae4] items-center rounded-sm flex gap-1 cursor-pointer">
                <LuClock4 size={18} />
                {trigger?.interval ?? '2 mins'}
              </p>
            )}
          </div>
          <p className="py-1 px-[2px] border-[1px] hover:bg-[#f7f6fd] border-white rounded-sm cursor-pointer hover:border-[1px] hover:border-[#695be8]">
            <HiDotsVertical size={18} />
          </p>
        </div>
        <div className="flex gap-2">
          {index}.
          {trigger?.eventName ?? action?.eventName ?? (
            <p className="text-gray-400">Select the event</p>
          )}
        </div>
      </div>
    </div>
  );
}
