import { GoPencil } from 'react-icons/go';
import { RiNotionLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import SecondaryButton from '../buttons/SecondaryButton';
import EventInput from '../EventInput';
import { MdAccountCircle } from 'react-icons/md';

const notionNavItems = [
  {
    id: 1,
    title: 'App & event',
  },
  {
    id: 2,
    title: 'Account',
  },
  {
    id: 3,
    title: 'Trigger',
  },
  {
    id: 4,
    title: 'Test',
  },
];

function EditZap() {
  return (
    <div className="text-xxxs w-[30%] text-[#2d2e2e]">
      <div className="flex gap-2 items-center py-2 px-2 border-[#d7d5d2] border-b-[1px]">
        <p className="p-[2px] border-[1px] border-[#d7d3c9]">
          <RiNotionLine size={18} />
        </p>
        <p className="flex flex-1 font-bold cursor-pointer">1. Updated Page</p>
        <GoPencil size={12} className="cursor-pointer m-[1px]" />
        <RxCross2 size={14} className="cursor-pointer m-[1px]" />
      </div>
      <div className="flex gap-2 justify-around px-2 py-2 border-[#d7d5d2] border-b-[1px]">
        {notionNavItems.map((x) => (
          <div key={x.id}>{x.title}</div>
        ))}
      </div>
      <div className="flex flex-col gap-2 m-2 border-[#d7d5d2] border-b-[1px]">
        <div className="flex gap-2 items-center m-1 rounded-sm px-1 py-1 border-[#eaeae4] border-[1px]  cursor-pointer">
          <RiNotionLine size={18} />
          <span className="flex flex-1 font-bold">Notion</span>
          <SecondaryButton text="Change" />
        </div>
      </div>
      <div className="flex flex-col justify-between h-[70%]">
        <div className="flex flex-col gap-1 shadow-lg shadow-gray-300 m-2 h-[90%]">
          <EventInput items={[]} label={'Email'} required={true} />
          <p className="text-xxxxs">This is performed when the Zap runs.</p>
        </div>
        <div className="h-[10%]">
          <EditZapFooter eventSelected={false} />
        </div>
      </div>
    </div>
  );
}

export function EditZapFooter({ eventSelected }: { eventSelected: boolean }) {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <button
          className={`${
            eventSelected ? '' : 'cursor-not-allowed'
          } text-xxxs bg-gray-300 border-[1px] border-gray-400 p-1`}
        >
          {eventSelected ? '' : 'To continue, choose an event'}
        </button>
        <p className="bg-purple-700 rounded-full p-1">
          <MdAccountCircle size={20} color="white" />
        </p>
      </div>
    </div>
  );
}

export default EditZap;
