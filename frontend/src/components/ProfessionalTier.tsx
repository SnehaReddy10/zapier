import { IoIosInformationCircle } from 'react-icons/io';

function ProfessionalTier() {
  return (
    <div className="flex gap-2 text-[#483f40] bg-[#f7f6fd] text-xxs px-4 py-2 border-[1px] border-[#695be8]">
      <IoIosInformationCircle fill="#695be8" size={18} />
      <div className="flex flex-col">
        <p className="font-bold">Welcome to your Professional trial!</p>
        <p>
          You have 14 days to try Zapier’s{' '}
          <span className="underline">paid features</span>.{' '}
          <span className="underline">Upgrade</span> anytime for as low as $
          19.99 USD /month.
        </p>
      </div>
    </div>
  );
}

export default ProfessionalTier;
