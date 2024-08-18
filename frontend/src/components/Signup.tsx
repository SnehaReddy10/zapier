import React from 'react';
import AuthButton from './buttons/AuthButton';
import InputBox from './InputBox';
import Button from './buttons/Button';

export function Signup() {
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
        <InputBox label="Work Email" required={true} />
        <div className="grid grid-cols-2 gap-2">
          <InputBox label="First Name" required={true} />
          <InputBox label="Last Name" required={true} />
        </div>
        <Button
          primary={true}
          text="Get started free"
          className="w-full py-1"
        />
        <p className="text-xxs text-gray-700">
          By signing up, you agree to Zapier's{' '}
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
