'use client';

import { RxChevronDown } from 'react-icons/rx';
import TertiaryButton from './buttons/TertiaryButton';
import Zap from './Zap';
import SearchBar from './SearchBar';
import { ActionType } from '@/types/Zap';
import { useState } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { GoZap } from 'react-icons/go';

const zaps = [
  {
    id: 1,
    title: 'Untitled zap',
    actions: [ActionType.NOTION, ActionType.GMAIL],
    lastEdit: new Date(),
    running: true,
  },
  {
    id: 2,
    title: 'Untitled zap',
    actions: [ActionType.NOTION, ActionType.GMAIL],
    lastEdit: new Date(),
    running: true,
  },
];

function ZapList() {
  const [showCreateDropDown, setShowCreateDropdown] = useState(false);
  return (
    <div className="text-[#2e2f2f] p-3 text-xxs w-full border-l-[1px] border-t-[1px] border-[#ebe8e1]">
      <SearchBar />
      <div className="flex justify-between mt-2">
        <p className="font-sans text-2xl font-semibold">
          My Zaps (default folder)
        </p>
        <div className="relative">
          <TertiaryButton
            onclick={() => setShowCreateDropdown((x) => !x)}
            text="Create"
            className="bg-[#695be8] text-white hover:bg-[#503ebd]"
          />
          {showCreateDropDown && (
            <div className="bg-[#fffdf9] shadow-lg p-2 z-10 shadow-[#e0dedb] w-max absolute end-0 flex flex-col gap-1 items-center m-1">
              <div className="grid grid-cols-1 gap-1 items-center">
                <div className="flex gap-1 p-1 items-center hover:bg-[#f7f6fd] hover:text-[#695be8]">
                  <GoZap color="black" size={15} className="col-span-1" />
                  <a href="/editor" className="col-span-3">
                    New Zap
                  </a>
                </div>
                <div className="flex gap-1 p-1 items-center hover:bg-[#f7f6fd] hover:text-[#695be8]">
                  <CiFolderOn size={15} color="black" className="col-span-1" />
                  <p className="col-span-3">New Folder</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="table-auto w-full mt-2">
        <thead>
          <tr className="flex gap-4 items-center py-1 border-b-[2px] border-[#ece9df]">
            <th>
              <div className="flex">
                <p className="flex p-[1px] px-1 border-[1px] rounded-sm border-[#bbb9b6]">
                  <input
                    type="checkbox"
                    className="cursor-pointer hover:shadow-md hover:shadow-gray-200"
                  />
                </p>
                <p className="p-[1px] border-[1px] rounded-sm border-[#bbb9b6]">
                  <RxChevronDown size={20} color="#767575" />
                </p>
              </div>
            </th>
            <th></th>
            <th className="flex flex-1">Name</th>
            <th>Last edit</th>
            <th>Runnning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {zaps.map((x) => (
            <Zap key={x.id} zap={x} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ZapList;
