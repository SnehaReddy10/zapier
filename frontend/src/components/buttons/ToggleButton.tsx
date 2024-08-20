'use client';

function ToggleButton({
  isOn,
  onClick,
}: {
  isOn: boolean;
  onClick: () => void;
}) {
  return (
    <p
      onClick={onClick}
      className={`absolute justify-center hover:cursor-pointer ${
        isOn ? 'right-0' : 'left-0'
      } -top-1 items-center flex h-4 w-4 text-white rounded-full text-xxxs bg-black`}
    >
      {isOn ? 'On' : 'Off'}
    </p>
  );
}

export default ToggleButton;
