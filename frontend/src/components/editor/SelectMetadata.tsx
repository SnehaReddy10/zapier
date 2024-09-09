import { SELECTED_RECORD } from '@/constants/constants';
import EventInput from '../utils/inputs/EventInput';

export function SelectMetadata({
  metadata,
  requiredMetadata,
  setRequiredMetadata,
}: {
  metadata: string;
  requiredMetadata: string;
  setRequiredMetadata: (e: any) => void;
}) {
  const payload = JSON.parse(metadata);
  const selectedRecord = JSON.parse(
    localStorage.getItem(SELECTED_RECORD) || ''
  );
  const options = JSON.parse(selectedRecord.payload);

  return (
    <div className="m-2 flex flex-col gap-2">
      {Object.keys(payload).map((x: any) => {
        return (
          <EventInput
            label={x}
            required={payload[x] == 1}
            selectedItem={{ name: requiredMetadata[x] }}
            items={Object.keys(options).map((x) => ({ id: x, name: x }))}
            placeHolder={x}
            onSelect={(e) => {
              console.log({ e });
              setRequiredMetadata((y: any) => ({ ...y, [x]: e.name }));
            }}
          />
        );
      })}
    </div>
  );
}
