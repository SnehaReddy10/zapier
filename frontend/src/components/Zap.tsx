'use client';

import { ActionType, Zap as ZapSchema } from '@/app/types/Zap';
import { BiLogoGmail } from 'react-icons/bi';
import { RiArrowRightSLine, RiNotionLine } from 'react-icons/ri';
import { RxDragHandleDots2 } from 'react-icons/rx';
import ToggleButton from './buttons/ToggleButton';
import { useState } from 'react';

const zap: ZapSchema = {
  title: 'Untitled zap',
  actions: [ActionType.NOTION, ActionType.GMAIL],
  lastEdit: new Date(),
  running: true,
};

function Zap() {
  const [running, setRunning] = useState(zap.running);

  const currentTime = new Date();
  return (
    <div className="py-1 border-b-[2px] border-[#ece9df]">
      <tr className="flex gap-4 py-1 items-center">
        <td>
          <div className="flex gap-2 items-center">
            <RxDragHandleDots2 className="hover:cursor-grab" />
            <input
              type="checkbox"
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
            {zap.actions.map((x) => (
              <div className="flex">
                {x == ActionType.NOTION && (
                  <p className="p-1 border-[1px] border-[#d7d3c9]">
                    <RiNotionLine />
                  </p>
                )}
                {x == ActionType.GMAIL && (
                  <p className="p-1 border-[1px] border-[#d7d3c9]">
                    <BiLogoGmail />
                  </p>
                )}
              </div>
            ))}
          </div>
        </td>
        <td className="flex flex-1 font-semibold hover:underline hover:text-[#503ebd] capitalize hover:cursor-pointer">
          {zap.title}
        </td>

        {currentTime.getMinutes() - zap.lastEdit.getMinutes() < 1 && (
          <td>Just now</td>
        )}
        {currentTime.getMinutes() - zap.lastEdit.getMinutes() > 1 &&
          currentTime.getMinutes() - zap.lastEdit.getMinutes() < 59 && (
            <td>{currentTime.getMinutes() - zap.lastEdit.getMinutes()}m ago</td>
          )}
        {currentTime.getHours() - zap.lastEdit.getHours() < 24 && (
          <td>{currentTime.getHours() - zap.lastEdit.getHours()}hr ago</td>
        )}
        <td>
          <div className="relative">
            <p className="h-2 rounded-full w-5 bg-slate-400"></p>
            <ToggleButton
              isOn={running}
              onClick={() => setRunning((z) => !z)}
            />
          </div>
        </td>
        <td>
          <p className="p-1 border-2 bg-[#f7f6fd] border-white rounded-md cursor-pointer hover:border-2 hover:border-[#695be8]">
            <RiArrowRightSLine />
          </p>
        </td>
      </tr>
    </div>
  );
}

export default Zap;
