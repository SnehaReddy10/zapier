import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa';

function LinkButton({ text, link, showDropDownIcon, showGlobeIcon }: any) {
  return (
    <div className="flex items-center gap-1 p-1 hover:bg-[#ece9df] text-gray-500 text-xxs rounded-sm">
      {showGlobeIcon && <BiGlobe size={20} />}
      <a href={link}>{text}</a>
      {showDropDownIcon && <FaChevronDown size={10} />}
    </div>
  );
}

export default LinkButton;
