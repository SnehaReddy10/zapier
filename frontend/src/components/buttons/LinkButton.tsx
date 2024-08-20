import React from 'react';
import { BiGlobe, BiSolidZap } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';

function LinkButton({
  text,
  link,
  showDropDownIcon,
  showGlobeIcon,
  icon,
  className,
}: any) {
  return (
    <div
      className={`flex items-center gap-1 p-1 hover:bg-[#ece9df] text-gray-500 text-xxs rounded-sm ${className}`}
    >
      {showGlobeIcon && <BiGlobe size={20} />}
      {icon == 'home' && <IoHomeOutline />}
      {icon == 'zaps' && <BiSolidZap color="#ff4f00" />}
      <a href={link}>{text}</a>
      {showDropDownIcon && <FaChevronDown size={10} />}
    </div>
  );
}

export default LinkButton;
