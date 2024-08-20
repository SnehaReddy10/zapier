import React from 'react';

function SecondaryButton({ text }: { text: string }) {
  return (
    <div className="py-1 px-2 rounded-sm border-[#3d4592] border-[1px] hover:bg-[#f0f1fa] transition-all ease-linear">
      {text}
    </div>
  );
}

export default SecondaryButton;
