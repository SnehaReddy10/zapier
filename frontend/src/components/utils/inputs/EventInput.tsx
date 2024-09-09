import { useState } from 'react';
import { RiAsterisk } from 'react-icons/ri';
import Search from '../search/Search';

function EventInput({
  selectedItem,
  items,
  label,
  placeHolder,
  required,
  onSelect,
}: {
  selectedItem: any;
  items: any;
  label: string;
  placeHolder: string;
  required: boolean;
  onSelect: (e: any) => void;
}) {
  const [showEvents, setShowEvents] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <p className="flex gap-1">
        <RiAsterisk size={10} />
        <span className="font-semibold capitalize">{label}</span>
        {required && '(required)'}
      </p>
      <div className="relative flex gap-1 items-center h-6 border-[1px] border-gray-400 rounded-sm hover:border-purple-700">
        <Search
          selectedItem={selectedItem}
          placeHolder={placeHolder}
          setShowEvents={setShowEvents}
        />
        {showEvents && (
          <div className="z-20 absolute overflow-y-scroll max-h-40 top-[42px] bg-gray-90 py-2 px-1 shadow-lg shadow-gray-100 w-full">
            <p className="uppercase text-gray-500 font-bold mb-1 px-1">
              Create
            </p>
            {items.length == 0 && (
              <div className="py-1 flex flex-col gap-1 hover:cursor-pointer hover:bg-purple-100 px-1 rounded-md">
                <p className="text-xxxxs">No Events</p>
              </div>
            )}
            {items.map((x: any) => (
              <div
                key={x.id}
                onClick={() => {
                  setShowEvents(false);
                  onSelect(x);
                }}
                className="py-1 flex flex-col gap-1 hover:cursor-pointer hover:bg-purple-100 px-1 rounded-md"
              >
                <p className="font-semibold">{x.name}</p>
                <p className="text-xxxxs">{x.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventInput;
