import { ImCross } from 'react-icons/im';
import { MdCancel } from 'react-icons/md';

function Banner() {
  return (
    <div className="flex items-center justify-center text-xxs font-semibold py-1 w-full bg-[#1f3121] text-white">
      Don&apos;t miss HubSpot Co-founder and CTO Dharmesh Shah at ZapConnect
      2024.
      <span className="font-bold underline hover:cursor-pointer">
        Claim your spot!
      </span>
      <span className="absolute p-1 end-5 flex border-[1px] border-[#1f3121] hover:cursor-pointer hover:border-[1px] hover:border-white">
        <ImCross size={10} />
      </span>
    </div>
  );
}

export default Banner;
