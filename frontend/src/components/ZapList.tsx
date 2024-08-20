import { RxChevronDown } from 'react-icons/rx';
import TertiaryButton from './buttons/TertiaryButton';
import Zap from './Zap';

function ZapList() {
  return (
    <div className="text-[#2e2f2f] text-xxs">
      <div className="flex justify-between">
        <p className="font-sans text-2xl font-semibold">
          My Zaps (default folder)
        </p>
        <TertiaryButton
          text="Create"
          className="bg-[#695be8] text-white hover:bg-[#503ebd]"
        />
      </div>
      <table className="table-auto w-full mt-2">
        <thead>
          <tr className="flex gap-4 items-center py-1 border-b-[2px] border-[#ece9df]">
            <th>
              <div className="flex">
                <p className="flex p-[1px] px-1 border-[1px] rounded-sm border-[#bbb9b6]">
                  <input
                    type="checkbox"
                    className="cursor-pointer hover:shadow-md hover:shadow-gray-200"
                  />
                </p>
                <p className="p-[1px] border-[1px] rounded-sm border-[#bbb9b6]">
                  <RxChevronDown size={20} color="#767575" />
                </p>
              </div>
            </th>
            <th></th>
            <th className="flex flex-1">Name</th>
            <th>Last edit</th>
            <th>Runnning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Zap />
        </tbody>
      </table>
    </div>
  );
}

export default ZapList;
