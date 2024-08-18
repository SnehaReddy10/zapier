'use client';

import { useState } from 'react';
import { RiAsterisk } from 'react-icons/ri';

function InputBox({
  label,
  required,
  placeHolder,
  type = 'text',
  onChange,
}: {
  label: string;
  required: boolean;
  placeHolder?: string;
  type?: string;
  onChange: (e: string) => void;
}) {
  const [error, setError] = useState(null);
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xxs flex gap-1">
        <RiAsterisk size={10} />
        <span className="font-semibold">{label}</span>{' '}
        {required && <span className="text-gray-600">(required)</span>}
      </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeHolder}
        className="border-[1px] text-xs px-2 font-medium border-gray-400 rounded-sm h-8"
      />
      {error && <span>{error}</span>}
    </div>
  );
}

export default InputBox;
