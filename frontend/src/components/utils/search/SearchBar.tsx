'use client';
import { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { VscSearch } from 'react-icons/vsc';

function SearchBar() {
  const [textToSearch, setTextToSearch] = useState('');
  return (
    <div className="flex w-full border-[1px] border-[#bbb9b6] hover:border-black transition-all ease">
      <div className="flex border-r-[0.5px] border-[#bbb9b6] hover:border-black p-1">
        <GoChevronRight
          size={25}
          color="#62615f"
          className="hover:fill-black"
        />
        <p className="text-[#62615f] hover:text-black">Search</p>
      </div>
      <input
        type="text"
        onChange={(e) => setTextToSearch(e.target.value)}
        className="border-l-[0.5px] border-[#bbb9b6] hover:border-black flex flex-1 p-1"
      />
      <p
        className={`p-1 flex justify-center items-center ${
          textToSearch == ''
            ? 'cursor-not-allowed bg-[#bbb9b6]'
            : 'cursor-pointer bg-[#695be8] text-white hover:bg-[#503ebd]'
        }`}
      >
        <VscSearch />
      </p>
    </div>
  );
}

export default SearchBar;
