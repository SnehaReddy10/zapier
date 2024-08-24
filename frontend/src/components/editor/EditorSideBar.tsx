import { CiCircleMore } from 'react-icons/ci';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuFileSearch2 } from 'react-icons/lu';
import { PiCirclesFour } from 'react-icons/pi';
import { RiTv2Line } from 'react-icons/ri';

export function EditorSideBar() {
  return (
    <div className="flex flex-col items-stretch gap-3 pt-1 px-[8px] bg-[#2d2e2e]">
      <PiCirclesFour color="#95928e" size={18} />
      <LuFileSearch2 color="#95928e" size={18} />
      <FaRegCalendarAlt color="#95928e" size={18} />
      <FaRegClock color="#95928e" size={18} />
      <CiCircleMore color="#95928e" size={18} />
      <IoSettingsOutline color="#95928e" size={18} />
      <RiTv2Line color="#95928e" size={18} />
    </div>
  );
}
