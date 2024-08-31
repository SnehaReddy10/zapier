import { useEffect, useState } from 'react';
import SecondaryButton from './SecondaryButton';

const zapUrl =
  'http://localhost:3001/12d100be-4e45-4b4e-81e2-97771d686b22/b5833745-e6a5-44fb-b152-94fb91b8ff89';

function ZapUrlButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
    navigator.clipboard.writeText(zapUrl);
  };

  return (
    <div className="relative w-full flex bg-gray-50 items-center mt-2 px-2 border-[1px] border-gray-1000">
      <p className="p-2 text-brown-300 overflow-ellipsis text-nowrap overflow-hidden">
        {zapUrl}
      </p>
      <SecondaryButton text="Copy" onClick={handleCopy} />
      {copied && <CopiedText />}
    </div>
  );
}

export function CopiedText() {
  return (
    <p className="absolute end-0 top-8 bg-black text-white px-2 p-1 rounded-full">
      Copied to clipboard
    </p>
  );
}

export default ZapUrlButton;
