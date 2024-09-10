'use client';

import { LiaSearchSolid } from 'react-icons/lia';
import Logo from './utils/Logo';
import TertiaryButton from './utils/buttons/TertiaryButton';
import { RxCross2 } from 'react-icons/rx';
import {
  IoIosGlobe,
  IoIosHelpCircleOutline,
  IoIosLogOut,
} from 'react-icons/io';
import { DropDown } from './utils/DropDown';
import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { TOKEN } from '@/constants';

const dropDownList = [
  {
    title: 'test@gmail.com',
    link: '/zaps',
  },
  {
    title: 'Settings',
    link: '/zaps',
    icon: <IoSettingsOutline size={15} color="black" className="col-span-1" />,
  },
  {
    title: 'Log out',
    link: '/',
    icon: <IoIosLogOut size={15} color="black" className="col-span-1" />,
    onClick: () => logout(),
  },
];

function Appbar() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="flex justify-between text-xxs text-[#463d3b] py-[2px] font-semibold border-b-[1px] border-[#e6e2db]">
      <div className="flex gap-2 items-center">
        <RxCross2 color="#463d3b" />
        <Logo className="text-base" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1 hover:bg-gray-300 rounded-sm px-2 py-[2px] cursor-pointer">
          <LiaSearchSolid color="#463d3b" size={20} />
          <p>Search</p>
        </div>
        <div className="flex items-center gap-1 hover:bg-gray-300 rounded-sm px-2 py-[2px] cursor-pointer">
          <IoIosHelpCircleOutline color="#463d3b" size={20} />
          <p>Help</p>
        </div>
        <div className="flex items-center gap-1 hover:bg-gray-300 rounded-sm px-2 py-[2px] cursor-pointer">
          <IoIosGlobe color="#463d3b" size={20} />
          <p>Explore Zapier</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 hover:bg-gray-300 rounded-sm border-gray-100 border-[1px] px-2 py-[2px]">
            <p>Contact Sales</p>
          </div>
          <TertiaryButton
            onclick={() => {}}
            text="Upgrade"
            className="bg-purple-700 text-white hover:bg-purple-800"
          />
          <div className="relative">
            <button
              onClick={() => setShowDropDown((x: boolean) => !x)}
              className=" rounded-full bg-[#2d2e2e] text-white text-xs p-1"
            >
              SR
            </button>
            {showDropDown && (
              <DropDown
                dropDownList={dropDownList}
                itemClassName="hover:bg-gray-300 hover:text-black"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function logout() {
  localStorage.removeItem(TOKEN);
}

export default Appbar;
