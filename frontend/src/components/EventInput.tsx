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
      <div className="flex gap-1 items-center border-[1px] border-gray-400 rounded-sm p-1 hover:border-purple-700">
        <VscSearch size={20} />
        <input
          type="text"
          placeholder="Choose an event"
          className="p-1 w-full appearance-none"
        />
      </div>
    </div>
  );
}

export default EventInput;
