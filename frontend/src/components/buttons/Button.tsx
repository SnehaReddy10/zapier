import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function Button({ text, link, size, primary, showIcon, className }: any) {
  return (
    <div
      className={`${className} flex gap-2 items-center ${
        primary
          ? 'bg-[#ff4f00] border-2 border-[#ff4f00] text-white'
          : 'text-black border-[1px] hover:border-2 border-black'
      } transition-all ease font-semibold rounded-full ${
        size == 'sm'
          ? 'text-xxs py-[3px] px-3 hover:shadow-lg'
          : `flex justify-center text-xs py-[10px] w-44 ${
              primary ? 'hover:bg-[#b65122] hover:border-[#b65122]' : ''
            }`
      }`}
    >
      {showIcon && <FcGoogle size={25} />}
      <a href={link}>{text}</a>
    </div>
  );
}

export default Button;
