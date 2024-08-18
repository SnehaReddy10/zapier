import { FcGoogle } from 'react-icons/fc';

type authType = 'Google' | 'Microsoft' | 'Facebook' | 'SSO';

function AuthButton({ text, className, authType: authType }: any) {
  return (
    <div
      className={`${className} items-center transition-all ease rounded-sm flex py-2 px-2 text-xs`}
    >
      <p className="bg-white p-[2px] rounded-sm">
        {authType == 'Google' && <FcGoogle size={25} />}
        {authType == 'Microsoft' && (
          <img src="/icons/microsoft.png" height={20} width={20} />
        )}
        {authType == 'Facebook' && <FcGoogle />}
        {authType == 'SSO' && <FcGoogle />}
      </p>
      <p className="flex flex-1 text-center justify-center">{text}</p>
    </div>
  );
}

export default AuthButton;
