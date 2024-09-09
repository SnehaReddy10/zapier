import TertiaryButton from '../utils/buttons/TertiaryButton';

export function ConnectAccount({ zap }: { zap: any }) {
  return (
    <div className="m-4 flex flex-col gap-2">
      <div className="h-10 flex gap-2 border-gray-1000 border-b-[1px] items-center rounded-sm px-2 py-2 border-[1px]  cursor-pointer">
        <img src={zap.image} alt="" className="w-4 h-3" />
        <span className="flex flex-1 font-bold">
          {zap.trigger ?? zap.action}
        </span>
        <TertiaryButton
          onclick={() => {}}
          text="Sign in"
          className="bg-blue-500 text-white hover:bg-blue-800 p-1"
        />
      </div>
      <p className="text-gray-600 text-xxxxs">
        {zap.trigger ?? zap.action} is a secure partner with Zapier.{' '}
        <a className="text-blue-500 underline" href="">
          Your credentials are encrypted & can be removed at any time
        </a>
        . You can{' '}
        <a className="text-blue-500 underline" href="">
          manage all of your connected accounts here
        </a>
        .
      </p>
    </div>
  );
}
