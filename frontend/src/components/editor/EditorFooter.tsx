import { SELECTED_RECORD } from '@/constants/constants';
import { EditZapFooterInputSchema } from '@/interfaces/input-schemas/EditZapFooterInputSchema';
import { ZapCellType } from '@/types/Zap';
import { MdAccountCircle } from 'react-icons/md';

export function EditZapFooter({
  currentTab,
  eventSelected,
  selectedRecord,
  zapType,
  metadata,
  setCurrentTab,
  setMetadata,
}: EditZapFooterInputSchema) {
  return (
    <div className="flex justify-between items-center p-2">
      <button
        disabled={!eventSelected}
        onClick={() => {
          console.log({ zapType, currentTab });
          if (zapType == ZapCellType.action && currentTab == 3) {
            setMetadata(metadata, zapType);
          }
          if (currentTab < 4) {
            setCurrentTab(currentTab + 1);
          } else {
            currentTab == 4
              ? localStorage.setItem(SELECTED_RECORD, selectedRecord)
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
