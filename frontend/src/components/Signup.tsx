'use client';

import React, { useState } from 'react';
import AuthButton from './buttons/AuthButton';
import InputBox from './InputBox';
import Button from './buttons/Button';
import { CreateUser } from '@/api/auth';

export function Signup() {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setlastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSetFirstName = (e: string) => setFirstName(e);
  const handleSetLastName = (e: string) => setlastName(e);
  const handleSetEmail = (e: string) => setEmail(e);
  const handleSetPassword = (e: string) => setPassword(e);
  const createUser = () => {
    console.log({ firstname, lastname, email, password });
    CreateUser({ firstname, lastname, email, password });
  };

  return (
    <div>
      {' '}
      <div className="flex flex-col gap-4 border-[1px] p-4 m-10">
        <AuthButton
          authType="Google"
          className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-semibold"
          text="Sign up with Google"
        />
        <div className="flex gap-3 items-center">
          <p className="w-full border-b-[1px] border-gray-200" />
          <span className="text-xxs text-gray-500 font-semibold">OR</span>
          <p className="w-full border-b-[1px] border-gray-200" />
        </div>
        <InputBox
          onChange={(e) => handleSetEmail(e)}
          label="Work Email"
          required={true}
        />
        <div className="grid grid-cols-2 gap-2">
          <InputBox
            label="First Name"
            required={true}
            onChange={(e) => handleSetFirstName(e)}
          />
          <InputBox
            onChange={(e) => handleSetLastName(e)}
            label="Last Name"
            required={true}
          />
        </div>
        <InputBox
          type="password"
          onChange={(e) => handleSetPassword(e)}
          label="Password"
          required={true}
        />
        <Button
          onClick={createUser}
          primary={true}
          text="Get started free"
          className="w-full py-1"
        />
        <p className="text-xxs text-gray-700">
          By signing up, you agree to Zapier&apos;s{' '}
          <a className="underline" href="">
            terms of service
          </a>{' '}
          and{' '}
          <a className="underline" href="">
            privacy policy.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
