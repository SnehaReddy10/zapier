'use client';

import Button from '@/components/buttons/Button';
import '.././globals.css';
import { usePathname } from 'next/navigation';
import LinkButton from '@/components/buttons/LinkButton';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLogin = pathname.includes('login');

  return (
    <div className="px-10">
      <div className="border-b-[1px] border-gray-200">
        <div className="flex justify-between px-40 py-2">
          <p className="font-[800] text-xl">
            <span className="text-[#ff4f00]">_</span>zapier
          </p>
          {isLogin && (
            <Button link="sign-up" text="Sign up" primary={true} size="sm" />
          )}
          {!isLogin && (
            <LinkButton link="login" text="Log in" primary={false} size="sm" />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
