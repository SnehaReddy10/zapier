import { GoPencil } from 'react-icons/go';
import { RiNotionLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { getAvailableEventsForActions } from '@/api/actions';
import { getAvailableEventsForTrigger } from '@/api/triggers';
import { ZapCellType } from '@/types/Zap';
import { TestTrigger } from './TestTrigger';
import { EditZapFooter } from './EditorFooter';
import { ChooseEvent } from '../utils/inputs/ChooseEvent';
import { ConnectAccount } from './ConnectAccount';
import { SelectMetadata } from './SelectMetadata';
import { notionNavItems } from '@/constants/editor-nav-items';
import { EditZapInputSchema } from '@/interfaces/input-schemas/EditZapInputSchema';

function EditZap({
  zap,
  zapType,
  onEventSelect,
  setShowEditZap,
  setShowModal,
  setMetadata,
}: EditZapInputSchema) {
  const [items, setItems] = useState<any[]>([]);
  const [currentEvent, setCurrentEvent] = useState<any>(null);
  const [currentTab, setCurrentTab] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState('');
  const [requiredMetadata, setRequiredMetadata] = useState<any>({});

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
            onClick={() => (x.id < currentTab ? setCurrentTab(x.id) : '')}
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

        {currentTab == 2 && <ConnectAccount zap={zap} />}

        {currentTab == 3 && currentEvent && zapType == ZapCellType.action && (
          <SelectMetadata
            metadata={currentEvent?.metaData}
            requiredMetadata={requiredMetadata}
            setRequiredMetadata={setRequiredMetadata}
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
          zapType={zapType}
          setMetadata={setMetadata}
          metadata={requiredMetadata}
        />
      </div>
    </div>
  );
}

export default EditZap;
