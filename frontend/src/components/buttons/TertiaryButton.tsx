'use client';

function TertiaryButton({
  text,
  onclick,
  className = '',
}: {
  text: string;
  onclick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onclick}
      className={`${className} rounded-sm px-2 font-semibold`}
    >
      {text}
    </button>
  );
}

export default TertiaryButton;
