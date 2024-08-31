import { VscSearch } from 'react-icons/vsc';

function Search({
  selectedItem,
  placeHolder,
  setShowEvents,
}: {
  selectedItem: any;
  placeHolder: string;
  setShowEvents: (e: any) => void;
}) {
  return (
    <div className="relative flex gap-1 items-center h-6 border-[1px] w-full border-gray-400 rounded-sm hover:border-purple-700">
      {!selectedItem && <VscSearch size={20} className="z-10 mx-1" />}
      <input
        onClick={(e: any) => {
          e.preventDefault();
          setShowEvents((c: any) => !c);
        }}
        onChange={() => {}}
        value={selectedItem?.name ?? ''}
        type="text"
        placeholder={placeHolder}
        className="absolute px-6 p-1 w-full appearance-none active:border-none select-none"
      />
    </div>
  );
}

export default Search;
