'use client';

import React from 'react';
import InputBox from './InputBox';
import Button from './buttons/Button';
import AuthButton from './buttons/AuthButton';
import { useState } from 'react';
import { LoginUser } from '@/api/auth';
import { useRouter } from 'next/navigation';
import { USER } from '@/constants/error-codes';

export function Login() {
  const router = useRouter();
  const [email, setEmail] = useState({ email: '', error: '' });
  const [password, setPassword] = useState({ password: '', error: '' });

  const handleSetEmail = (email: string) =>
    setEmail((e) => ({ ...e, email: email }));
  const handleSetPassword = (password: string) =>
    setPassword((e) => ({ ...e, password: password }));
  const loginUser = async () => {
    const result = await LoginUser({
      email: email.email,
      password: password.password,
    });
    if (result.success) {
      setEmail({ email: '', error: '' });
      setPassword({ password: '', error: '' });
      router.push('/zaps');
    } else {
      if (result.error.code == USER.NOT_FOUND) {
        setEmail((e) => ({ ...e, error: result.error.message }));
      } else if (result.error.code == USER.INCORRECT_PASSWORD) {
        setPassword((e) => ({ ...e, error: result.error.message }));
      }
    }
  };

  return (
    <div className="flex flex-col mx-10 justify-center py-5">
      <h2 className="font-sans font-semibold">Log in to your account</h2>
      <div className="flex flex-col gap-3 border-[1px] p-4 my-5">
        <AuthButton
          authType="Google"
          className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-semibold"
          text="Continue with Google"
        />
        <AuthButton
          authType="Facebook"
          className="bg-[#3b5999] hover:bg-[#3b5999] text-white font-semibold"
          text="Continue with Facebook"
        />
        <AuthButton
          authType="Microsoft"
          className="bg-[#2d2e2e] hover:bg-[#403f3e] text-white font-semibold"
          text="Continue with Microsoft"
        />
        <AuthButton
          authType="SSO"
          className="text-blue-500 border-[1px] border-blue-500 font-semibold"
          text="Continue with SSO"
        />
        <div className="flex gap-3 items-center">
          <p className="w-full border-b-[1px] border-gray-200" />
          <span className="text-xxxs text-gray-500 font-semibold">OR</span>
          <p className="w-full border-b-[1px] border-gray-200" />
        </div>
        <InputBox
          onChange={handleSetEmail}
          placeHolder="Email"
          label="Email"
          required={true}
          error={email.error}
        />
        <InputBox
          onChange={handleSetPassword}
          placeHolder="Password"
          label="Password"
          required={true}
          error={password.error}
        />
        <Button
          onClick={loginUser}
          disabled={email.email == '' || password.password == ''}
          text="Continue"
          className="w-full py-1 disabled disabled:bg-gray-200"
        />
        <p className="text-xxxs text-gray-700">
          Don&apos;t have a Zapier account yet?
          <a className="underline hover:cursor-pointer pl-1" href="">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
