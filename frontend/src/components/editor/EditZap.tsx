import { GoPencil } from 'react-icons/go';
import { RiNotionLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import SecondaryButton from '../buttons/SecondaryButton';
import EventInput from '../EventInput';
import { MdAccountCircle } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getAvailableEventsForActions } from '@/api/actions';
import { getAvailableEventsForTrigger } from '@/api/triggers';
import { ZapCellType } from '@/types/Zap';

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

function EditZap({
  zap,
  zapType,
  onEventSelect,
  setShowEditZap,
  setShowModal,
}: {
  zap: any;
  zapType: ZapCellType;
  onEventSelect: (event: string, zapType: ZapCellType) => void;
  setShowEditZap: (show: boolean) => void;
  setShowModal: (show: ZapCellType) => void;
}) {
  const [items, setItems] = useState<any[]>([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  console.log({ zap });

  useEffect(() => {
    if (zapType == ZapCellType.trigger) {
      getAvailableEventsForTrigger(zap.id).then((res) =>
        setItems(res.availableEvents)
      );
    } else if (zapType == ZapCellType.action) {
      getAvailableEventsForActions(zap.id).then((res) => {
        setItems(res.availableEvents);
      });
    }

    return () => setCurrentEvent(null);
  }, [zap.id]);

  return (
    <div className="text-xxxs w-[30%] max-w-2xl text-[#2d2e2e] flex flex-col h-screen">
      <div className="h-8 flex gap-2 items-center py-2 px-2 border-gray-1000 border-b-[1px]">
        <p className="p-[2px] border-[1px] border-[#d7d3c9]">
          <RiNotionLine size={18} />
        </p>
        <p className="flex flex-1 font-bold cursor-pointer">1. Updated Page</p>
        <GoPencil size={12} className="cursor-pointer m-[1px]" />
        <RxCross2
          size={14}
          className="cursor-pointer m-[1px]"
          onClick={() => setShowEditZap(false)}
        />
      </div>
      <div className="h-8 flex gap-2 justify-around px-2 py-2 border-gray-1000 border-b-[1px]">
        {notionNavItems.map((x) => (
          <div key={x.id}>{x.title}</div>
        ))}
      </div>

      {1 && (
        <ChooseEvent
          currentEvent={currentEvent}
          zap={zap}
          zapType={zapType}
          items={items}
          onEventSelect={onEventSelect}
          setShowModal={setShowModal}
          setCurrentEvent={setCurrentEvent}
        />
      )}

      <div className="mb-14">
        <EditZapFooter eventSelected={currentEvent == null ? false : true} />
      </div>
    </div>
  );
}

export function EditZapFooter({ eventSelected }: { eventSelected: boolean }) {
  return (
    <div className="flex justify-between items-center p-2">
      <button
        className={`${
          eventSelected
            ? 'bg-blue-500 text-white cursor-pointer px-2 font-semibold'
            : 'cursor-not-allowed text-brown-200 bg-gray-50'
        } text-xxxs border-[1px] border-gray-1000 p-1 rounded-sm`}
      >
        {eventSelected ? 'Continue' : 'To continue, choose an event'}
      </button>
      <p className="bg-blue-500 rounded-full p-1">
        <MdAccountCircle size={20} color="white" />
      </p>
    </div>
  );
}

export function ChooseEvent({
  zap,
  setShowModal,
  zapType,
  currentEvent,
  setCurrentEvent,
  onEventSelect,
  items,
}: {
  zap: any;
  zapType: ZapCellType;
  currentEvent: any;
  items: any;
  onEventSelect: (event: string, zapType: ZapCellType) => void;
  setCurrentEvent: (event: any) => void;
  setShowModal: (show: ZapCellType) => void;
}) {
  return (
    <div className="flex flex-col flex-grow shadow-lg shadow-gray-200">
      <div className="h-8 flex gap-2 m-2 border-gray-1000 border-b-[1px] items-center rounded-sm px-2 py-1 border-[1px]  cursor-pointer">
        <img src={zap.image} alt="" className="w-4 h-3" />
        <span className="flex flex-1 font-bold">
          {zap.trigger ?? zap.action}
        </span>
        <SecondaryButton
          text="Change"
          onClick={() => {
            setShowModal(zapType);
          }}
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="flex flex-col flex-grow gap-1 m-2">
          <EventInput
            selectedItem={currentEvent}
            onSelect={(e: any) => {
              setCurrentEvent(e);
              onEventSelect(e, zapType);
            }}
            items={items}
            label={'Event'}
            required={true}
          />
          <p className="text-xxxxs">This is performed when the Zap runs.</p>
        </div>
      </div>
    </div>
  );
}

export default EditZap;
