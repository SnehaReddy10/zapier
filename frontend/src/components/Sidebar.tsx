'use client';
import { IoIosAdd } from 'react-icons/io';
import LinkButton from './buttons/LinkButton';
import { usePathname } from 'next/navigation';

export const navItems = [
  {
    id: 1,
    link: 'zaps',
    icon: 'zaps',
    text: 'Zaps',
  },
  {
    id: 2,
    link: 'tables',
    icon: 'tables',
    text: 'Tables',
  },
  {
    id: 3,
    link: 'interfaces',
    icon: 'interfaces',
    text: 'Interfaces',
  },
];

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="pr-1 flex flex-col gap-1">
      <button className="flex gap-1 items-center bg-[#ff4f00] hover:bg-[#b65122] text-white px-10 py-1 text-xs font-semibold rounded-md">
        <IoIosAdd color="white" size={20} />
        <p>Create</p>
      </button>
      <LinkButton
        icon="home"
        text="Home"
        className="p-1 border-[#bbb9b6] border-t-[1px] my-1 py-1"
      />
      <div className="border-[#bbb9b6] border-y-[1px] flex flex-col gap-1">
        {navItems.map((x) => (
          <LinkButton
            key={x.id}
            link={x.link}
            icon={x.icon}
            text={x.text}
            className={`p-1 m-[2px] hover:bg-[#f5f3eb] cursor-pointer ${
              pathname.includes(x.link) ? 'bg-[#fdf5f2] hover:bg-[#fdf5f2]' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
