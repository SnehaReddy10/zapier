import React from 'react';

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={() => {
        console.log('click');
        onClick();
      }}
      className="my-1 text-[#5140bf] hover:cursor-pointer w-5 h-5 flex justify-center items-center hover:text-white transition-all ease-linear hover:bg-[#5140bf] rounded-full"
    >
      +
    </div>
  );
}

export default AddButton;
