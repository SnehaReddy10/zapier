'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function Button({
  text,
  link,
  size,
  primary,
  showIcon,
  className,
  disabled,
  onClick,
}: any) {
  const router = useRouter();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${
        disabled
          ? 'cursor-not-allowed text-gray-500 border-[1px] border-gray-400'
          : 'hover:cursor-pointer'
      } flex gap-2 items-center ${
        primary
          ? 'bg-[#ff4f00] border-2 border-[#ff4f00] text-white'
          : `text-black border-[1px] ${
              disabled ? '' : 'hover:border-2 border-black'
            } `
      } transition-all ease font-semibold rounded-full ${
        size == 'sm'
          ? 'text-xxs py-[3px] px-3 hover:shadow-lg'
          : `flex justify-center text-xs py-[10px] w-44 ${
              primary ? 'hover:bg-[#b65122] hover:border-[#b65122]' : ''
            }`
      }`}
    >
      {showIcon && <FcGoogle size={25} />}
      <p onClick={() => router.push(link)}>{text}</p>
    </button>
  );
}

export default Button;
