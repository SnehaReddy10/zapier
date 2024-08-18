import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';

type authType = 'Google' | 'Microsoft' | 'Facebook' | 'SSO';

function AuthButton({ text, className, authType: authType }: any) {
  return (
    <div
      className={`${className} hover:cursor-pointer items-center transition-all ease rounded-sm flex py-1 px-1 text-xxs`}
    >
      {authType && (
        <p
          className={`bg-white ${
            authType == 'Microsoft' ? 'p-1' : 'p-[2px]'
          } rounded-sm`}
        >
          {authType == 'Google' && <FcGoogle size={25} />}
          {authType == 'Microsoft' && (
            <img src="/icons/microsoft.png" height={16} width={16} />
          )}
          {authType == 'Facebook' && <IoLogoFacebook color="blue" size={25} />}
          {authType == 'SSO' && <MdOutlineAccountCircle size={25} />}
        </p>
      )}
      <p className="flex flex-1 text-center justify-center">{text}</p>
    </div>
  );
}

export default AuthButton;
