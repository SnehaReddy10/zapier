'use client';

import { Zap as ZapSchema } from '@/types/Zap';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';
import ToggleButton from './utils/buttons/ToggleButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toggleZap } from '@/api/zaps';

function Zap({ zap }: { zap: ZapSchema }) {
  const [running, setRunning] = useState(zap.running);
  const [selected, setSelected] = useState(false);
  const router = useRouter();

  const handleZapToggle = async () => {
    const result = await toggleZap({ zapId: zap.id });
    if (result.success) {
      setRunning((x) => !x);
    }
  };

  const currentTime = new Date();
  const mins = currentTime.getMinutes() - zap.lastEdit?.getMinutes();
  const hours = currentTime.getHours() - zap.lastEdit?.getHours();

  return (
    <tr
      className={`flex gap-4 items-center py-1 border-b-[2px] border-[#ece9df] ${
        selected ? 'bg-purple-100' : ''
      }`}
    >
      <td>
        <div className="flex gap-2 items-center">
          <RxDragHandleDots2 className="hover:cursor-grab" />
          <input
            type="checkbox"
            onChange={() => setSelected((x) => !x)}
            className="cursor-pointer hover:border-2 hover:border-black"
          />
          {/* TODO: //use this checkbox */}
          {/* <div className="relative">
              <input
                onChange={() => setChecked((x) => !x)}
                type="checkbox"
                className="absolute inset-0 appearance-none rounded-sm cursor-pointer border-2 p-1 border-[#695be8] checked:bg-[#695be8]"
              />
              <p>
                <IoIosCheckmark
                  className="absolute inset-0"
                  color={`${checked ? 'white' : '#695be8'}`}
                />
              </p>
            </div> */}
        </div>
      </td>
      <td>
        <div className="flex">
          <div className="flex">
            <img
              key={zap.trigger.id}
              src={zap.trigger.image}
              alt="trigger"
              className="w-5 h-4 p-[2px] mr-0 border-gray-60 border-[1px]"
            />
            {zap.actions.map((x) => (
              <img
                key={x.action.id}
                src={x.image}
                alt=""
                className="w-5 h-4 p-1 ml-0 border-gray-60 border-[1px]"
              />
            ))}
          </div>
        </div>
      </td>
      <td
        onClick={() => router.push(`/editor/${zap?.id}`)}
        className="flex flex-1 font-semibold hover:underline hover:text-[#503ebd] capitalize hover:cursor-pointer"
      >
        {zap.title ?? 'Untitled'}
      </td>
      {mins < 1 && <td>Just now</td>}
      {mins > 1 && mins < 59 && <td>{mins}m ago</td>}
      {mins > 59 && hours < 24 && <td>{hours}hr ago</td>}
      {hours > 23 && <td>{hours / 24}days ago</td>}
      <td>
        <div className="relative">
          <p className="h-2 rounded-full w-5 bg-slate-400"></p>
          <ToggleButton isOn={running} onClick={() => handleZapToggle()} />
        </div>
      </td>
      <td>
        <p className="p-1 border-2 bg-[#f7f6fd] border-white rounded-md cursor-pointer hover:border-2 hover:border-[#695be8]">
          <RiArrowRightSLine />
        </p>
      </td>
    </tr>
  );
}

export default Zap;
