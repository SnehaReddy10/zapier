import { RiAsterisk } from 'react-icons/ri';
import { VscSearch } from 'react-icons/vsc';

function EventInput({
  items,
  label,
  required,
}: {
  items: any;
  label: string;
  required: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="flex gap-1">
        <RiAsterisk size={10} />
        <span className="font-semibold">{label} </span>
        {required && '(required)'}
      </p>
      <div className="relative flex gap-1 items-center border-[1px] border-gray-400 rounded-sm p-1 hover:border-purple-700">
        <VscSearch size={20} className="z-10" />
        <input
          type="text"
          placeholder="Choose an event"
          className="absolute px-4 p-1 w-full appearance-none"
        />
        <div className="absolute overflow-y-scroll max-h-40 top-[42px] bg-[#fffdf9] py-2 px-1 shadow-lg shadow-gray-100 w-full">
          <p className="uppercase text-gray-500 font-bold mb-1 px-1">Create</p>
          {items.map((x: any) => (
            <div className="py-1 flex flex-col gap-1 hover:cursor-pointer hover:bg-purple-100 px-1 rounded-md">
              <p className="font-semibold">{x.name}</p>
              <p className="text-xxxxs">{x.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventInput;
