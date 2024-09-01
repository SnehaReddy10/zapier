import React from 'react';

function SecondaryButton({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`py-1 px-2 rounded-sm border-blue-500 border-[1px] hover:bg-purple-100 transition-all ease-linear ${className}`}
    >
      {text}
    </div>
  );
}

export default SecondaryButton;
