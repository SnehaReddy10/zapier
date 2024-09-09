'use client';

import { LiaSearchSolid } from 'react-icons/lia';
import Logo from './utils/Logo';
import TertiaryButton from './utils/buttons/TertiaryButton';
import { RxCross2 } from 'react-icons/rx';
import { IoIosGlobe, IoIosHelpCircleOutline } from 'react-icons/io';

function Appbar() {
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
          <button className="rounded-full bg-[#2d2e2e] text-white text-xs p-1">
            SR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
