import { getAvailableActions } from '@/api/actions';
import { ZapCellType } from '@/types/Zap';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { RxHome } from 'react-icons/rx';
import { FiTool } from 'react-icons/fi';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { LuZap } from 'react-icons/lu';
import { VscSearch } from 'react-icons/vsc';

function Modal({
  type,
  onSelect,
  index,
}: {
  type: ZapCellType;
  onSelect: (e: any) => void;
  index: number;
}) {
  const [availableActions, setAvailableActions] = useState<any>([]);
  const [availableTriggers, setAvailableTriggers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const result = getAvailableActions();
    result.then((data: any) => {
      if (data.success) {
        setAvailableActions(data.availableActions);
        setLoading(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#fffdf9] text-xxxs rounded-sm shadow-sm shadow-white w-1/3">
      <ModalSearchbar />
      <ModalAppBar />
      <div className="py-2 px-4">
        {loading && <Loader />}
        {(!loading && type == 1 && (
          <div className="p-1">
            <p className="font-semibold text-gray-400 py-1">Your top apps</p>
            {availableActions.map((x: any) => (
              <div
                onClick={() => {
                  console.log(x);
                  onSelect({ ...x, index });
                }}
                className="flex gap-2 items-center font-semibold py-2 my-2 bg-gray-50"
                key={x.id}
              >
                <img src={x.image} alt="" className="w-3 h-2" />
                <p>{x.action}</p>
              </div>
            ))}
          </div>
        )) ||
          (type == 0 &&
            availableTriggers.map((x: any) => (
              <div key={x.id}>{x.action}</div>
            )))}
      </div>
    </div>
  );
}

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

export function ModalAppBar() {
  return (
    <div className="flex gap-1 items-center text-black py-2 px-4 border-b-[1px] border-gray-100">
      <div className="p-1 border-[1px] border-double border-purple-700">
        <RxHome size={20} color="#695be8" />
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <HiOutlineSquaresPlus />
        <p>Apps</p>
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <LuZap />
        <p>Zapier products</p>
      </div>
      <div className="flex items-center justify-center gap-1 p-1 border-[1px] border-gray-100 rounded-sm">
        <FiTool />
        <p>Built-in tools</p>
      </div>
    </div>
  );
}

export default Modal;
