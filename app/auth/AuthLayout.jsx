"use client"

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function AuthLayout({ children }) {
  const pathName = usePathname();
  return (
    <div className="flex h-screen justify-center items-center bg-[#2E2E48]">
        <div className="rounded-lg w-full max-w-[1000px] h-[700px] bg-[#3A3958] flex justify-end">
        <div className="w-1/2 flex-shrink-0 flex justify-start flex-col items-center relative">
            <div className="mt-24">
              <Image src={"/logo.png"} width={300} height={500} />
            </div>
            <div className="text-4xl text-violet-200 w-full text-center mt-4 py-8 font-semibold">
              Welcome to <br /> Finance Feather
            </div>
            <hr className="border-2 w-64 rounded border-[#2E2E48]" />
            <div className="px-12 text-2xl text-center text-violet-200 mt-8">
              Your lightweight finance management solution
            </div>
            <a href="/auth/signin" className={`absolute text-lg rounded-l-xl bottom-28 right-0 px-4 py-3 w-32 ${pathName.includes('signin') ? 'text-violet-200 bg-[#2E2E48]' : 'text-[#AAAACF]'}`}>
              Sign In
            </a>
            <a href="/auth/signup" className={`absolute text-lg rounded-l-xl bottom-16 right-0 px-4 py-3 w-32 ${pathName.includes('signup') ? 'text-violet-200 bg-[#2E2E48]' : 'text-[#AAAACF]'}`}>
              Register
            </a>
        </div>
        <div className="rounded-lg my-8 mr-8 p-10 w-1/2 max-h-full bg-[#2E2E48]">
          {children}
        </div>
        </div>
    </div>
  );
}
