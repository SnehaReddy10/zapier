import { HiOutlineExternalLink } from 'react-icons/hi';
import { VscSearch } from 'react-icons/vsc';

export function ModalSearchbar() {
  return (
    <div className="flex items-center gap-2 py-2 px-4 text-xxxs text-[#aba8a4] font-semibold border-b-[1px] border-gray-100">
      <VscSearch color="#aba8a4" fontWeight={200} />
      <input
        type="text"
        className="flex-1"
        placeholder="Search 7000+ apps and tools..."
      />
      <a href="" className="flex gap-1 items-center justify-center underline">
        Browse all
        <HiOutlineExternalLink />
      </a>
    </div>
  );
}
