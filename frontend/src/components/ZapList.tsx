'use client';

import { RxChevronDown } from 'react-icons/rx';
import TertiaryButton from './utils/buttons/TertiaryButton';
import Zap from './Zap';
import SearchBar from './utils/search/SearchBar';
import { useEffect, useState } from 'react';
import { getAllZaps } from '@/api/zaps';
import { DropDown } from './utils/DropDown';
import { GoZap } from 'react-icons/go';
import { CiFolderOn } from 'react-icons/ci';

const dropDownList = [
  {
    title: 'New Zap',
    link: '/editor',
    icon: <GoZap size={15} color="black" className="col-span-1" />,
  },
  {
    title: 'New Folder',
    link: '/zaps',
    icon: <CiFolderOn size={15} color="black" className="col-span-1" />,
  },
];

function ZapList() {
  const [zaps, setZaps] = useState<any[]>([]);

  useEffect(() => {
    getAllZaps().then((res: any) => {
      if (res.success) {
        setZaps(res.zaps);
      }
    });
  }, []);

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
            <DropDown
              dropDownList={dropDownList}
              itemClassName="hover:bg-[#f7f6fd] hover:text-[#695be8]"
            />
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
