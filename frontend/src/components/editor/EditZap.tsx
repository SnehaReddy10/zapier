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
import TertiaryButton from '../buttons/TertiaryButton';
import { TestTrigger } from './TestTrigger';

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
  const [currentTab, setCurrentTab] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState('');

  useEffect(() => {
    setCurrentTab(1);
    setCurrentEvent(zap.event);

    notionNavItems[2].title =
      zapType == ZapCellType.action ? 'Action' : 'Trigger';

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
      <div className="h-8 flex gap-2 justify-around items-center border-gray-1000 border-b-[1px]">
        {notionNavItems.map((x) => (
          <div
            onClick={() => {
              if (x.id < currentTab) {
                setCurrentTab(x.id);
              }
            }}
            className={`flex items-center font-semibold ${
              x.id > currentTab ? 'text-gray-800' : 'text-black'
            } ${
              x.id == currentTab ? 'border-b-blue-500 border-b-2 h-full' : ''
            }`}
            key={x.id}
          >
            <div className="flex">{x.title}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-grow shadow-lg shadow-gray-200">
        {currentTab == 1 && (
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

        {currentTab == 2 && (
          <ConnectAccount
            currentEvent={currentEvent}
            zap={zap}
            zapType={zapType}
            items={items}
            onEventSelect={onEventSelect}
            setShowModal={setShowModal}
            setCurrentEvent={setCurrentEvent}
          />
        )}

        {zapType == ZapCellType.trigger && currentTab == 4 && (
          <TestTrigger
            triggerId={zap.id}
            setSelectedRecord={setSelectedRecord}
          />
        )}
      </div>

      <div className="mb-14">
        <EditZapFooter
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          eventSelected={currentEvent == null ? false : true}
          selectedRecord={selectedRecord}
        />
      </div>
    </div>
  );
}

export function EditZapFooter({
  currentTab,
  eventSelected,
  selectedRecord,
  setCurrentTab,
}: {
  currentTab: number;
  eventSelected: boolean;
  selectedRecord: string;
  setCurrentTab: (tabId: number) => void;
}) {
  return (
    <div className="flex justify-between items-center p-2">
      <button
        disabled={!eventSelected}
        onClick={() => {
          if (currentTab < 4) {
            setCurrentTab(currentTab + 1);
          } else {
            currentTab == 4
              ? localStorage.setItem('selectedRecord', selectedRecord)
              : '';
            setCurrentTab(1);
          }
        }}
        className={`${
          eventSelected
            ? 'bg-blue-500 text-white cursor-pointer px-2 font-semibold'
            : 'cursor-not-allowed text-brown-200 bg-gray-50'
        } text-xxxs border-[1px] border-gray-1000 p-1 rounded-sm`}
      >
        {eventSelected
          ? currentTab == 4
            ? 'Continue with selected record'
            : 'Continue'
          : 'To continue, choose an event'}
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
            placeHolder={'Choose an event'}
            required={true}
          />
          <p className="text-xxxxs">This is performed when the Zap runs.</p>
        </div>
      </div>
    </div>
  );
}

export function ConnectAccount({
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
    <div className="m-4 flex flex-col gap-2">
      <div className="h-10 flex gap-2 border-gray-1000 border-b-[1px] items-center rounded-sm px-2 py-2 border-[1px]  cursor-pointer">
        <img src={zap.image} alt="" className="w-4 h-3" />
        <span className="flex flex-1 font-bold">
          {zap.trigger ?? zap.action}
        </span>
        <TertiaryButton
          onclick={() => {}}
          text="Sign in"
          className="bg-blue-500 text-white hover:bg-blue-800 p-1"
        />
      </div>
      <p className="text-gray-600 text-xxxxs">
        {zap.trigger ?? zap.action} is a secure partner with Zapier.{' '}
        <a className="text-blue-500 underline" href="">
          Your credentials are encrypted & can be removed at any time
        </a>
        . You can{' '}
        <a className="text-blue-500 underline" href="">
          manage all of your connected accounts here
        </a>
        .
      </p>
    </div>
  );
}

export default EditZap;
