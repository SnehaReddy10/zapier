import { useRouter } from 'next/navigation';

interface DropDownListSchema {
  id: string;
  title: string;
  link: string;
  icon?: any;
  onClick?: () => void;
}

export function DropDown({
  dropDownList,
  className = '',
  itemClassName = '',
}: {
  dropDownList: DropDownListSchema[];
  className?: string;
  itemClassName?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={`bg-gray-90 shadow-lg p-2 z-10 shadow-[#e0dedb] w-max absolute end-0 flex flex-col gap-1 items-center m-1 ${className}`}
    >
      <div className="grid grid-cols-1 gap-1 items-center">
        {dropDownList.map((x: DropDownListSchema) => (
          <div
            key={x.id}
            className={`flex gap-1 p-1 items-center ${itemClassName}`}
          >
            {x.icon}
            <button
              onClick={() => {
                console.log('clicked');
                router.push(x.link);
                if (x.onClick) {
                  x.onClick();
                }
              }}
              className="col-span-3"
            >
              {x.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
