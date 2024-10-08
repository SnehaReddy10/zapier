'use client';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <div
      className={`flex items-center gap-1 p-1 hover:bg-[#ece9df] text-gray-500 text-xxs rounded-sm ${className}`}
    >
      {showGlobeIcon && <BiGlobe size={20} />}
      {icon == 'home' && <IoHomeOutline />}
      {icon == 'zaps' && <BiSolidZap color="#ff4f00" />}
      <button onClick={() => router.push(link)}>{text}</button>
      {showDropDownIcon && <FaChevronDown size={10} />}
      {/* {text == 'Log in' && (
        <div className="flex flex-col items-center justify-center fixed top-[4.5rem] right-[5.5rem] border-gray-60 border-[1px] p-2 bg-green-100">
          Please use these guest credentials to Login
          <div>
            <span className="font-bold">Email</span>: test@gmail.com
          </div>
          <div>
            <span className="font-bold">Password</span>: testtest
          </div>
        </div>
      )} */}
    </div>
  );
}

export default LinkButton;
