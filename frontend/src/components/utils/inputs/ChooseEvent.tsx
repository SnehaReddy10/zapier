import { ZapCellType } from '@/types/Zap';
import EventInput from './EventInput';
import SecondaryButton from '../buttons/SecondaryButton';

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
