import { RiAsterisk } from 'react-icons/ri';

function InputBox({ label, required }: any) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xxs flex gap-1">
        <RiAsterisk size={10} />
        <span className="font-semibold">{label}</span>{' '}
        {required && <span className="text-gray-600">(required)</span>}
      </label>
      <input
        type="text"
        className="border-[1px] border-gray-400 rounded-sm h-8"
      />
    </div>
  );
}

export default InputBox;
