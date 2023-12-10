'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AuthLayout({ children }) {
  const pathName = usePathname();
  return (
    <div className="flex h-screen items-center justify-center bg-[#2E2E48]">
      <div className="flex h-[700px] w-full max-w-[1000px] justify-end rounded-lg bg-[#3A3958]">
        <div className="relative flex w-1/2 shrink-0 flex-col items-center justify-start">
          <div className="mt-24">
            <Image src={'/logo.png'} width={300} height={500} alt="Finance Feather Logo" />
          </div>
          <div className="mt-4 w-full py-8 text-center text-4xl font-semibold text-violet-200">
              Welcome to <br /> Finance Feather
          </div>
          <hr className="w-64 rounded border-2 border-[#2E2E48]" />
          <div className="mt-8 px-12 text-center text-2xl text-violet-200">
              Your lightweight finance management solution
          </div>
          <a href="/auth/signin" className={`absolute bottom-[7.5rem] right-0 w-32 rounded-l-xl px-4 py-3 text-lg ${pathName.includes('signin') ? 'bg-[#2E2E48] text-violet-200' : 'text-[#AAAACF]'}`}>
              Sign In
          </a>
          <a href="/auth/signup" className={`absolute bottom-16 right-0 w-32 rounded-l-xl px-4 py-3 text-lg ${pathName.includes('signup') ? 'bg-[#2E2E48] text-violet-200' : 'text-[#AAAACF]'}`}>
              Register
          </a>
        </div>
        <div className="my-8 mr-8 max-h-full w-1/2 rounded-lg bg-[#2E2E48] p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
