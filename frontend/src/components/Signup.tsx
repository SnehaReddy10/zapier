'use client';

import React, { useState } from 'react';
import AuthButton from './buttons/AuthButton';
import InputBox from './InputBox';
import Button from './buttons/Button';
import { CreateUser } from '@/api/auth';
import { useRouter } from 'next/navigation';
import { USER } from '@/constants/error-codes';

export function Signup() {
  const router = useRouter();
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setlastName] = useState<string>('');
  const [email, setEmail] = useState({ mailId: '', error: '' });
  const [password, setPassword] = useState<string>('');

  const handleSetFirstName = (e: string) => setFirstName(e);
  const handleSetLastName = (e: string) => setlastName(e);
  const handleSetEmail = (e: string) =>
    setEmail((email) => ({ ...email, mailId: e }));
  const handleSetPassword = (e: string) => setPassword(e);
  const createUser = async () => {
    console.log({ firstname, lastname, email, password });
    const result = await CreateUser({
      firstname,
      lastname,
      email: email.mailId,
      password,
    });
    if (result.success) {
      setEmail({ mailId: '', error: '' });
      setlastName('');
      setFirstName('');
      setPassword('');
      router.push('/zaps');
    } else {
      if (result.error.code == USER.ALREADY_EXISTS) {
        setEmail((e) => ({ ...e, error: result.error.message }));
      }
    }
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
          error={email.error}
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
