'use client';

import React from 'react';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button className="absolute bottom-12 w-full rounded-2xl text-violet-200 hover:bg-[#3A3958] group" type="button" onClick={() => signOut()}>
      <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
      <svg className="flex-shrink-0 w-6 h-6 text-violet-200 transition duration-75 group-hover:text-gray-900"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
      <span className='flex-1 whitespace-nowrap font-medium'>Sign Out</span>
      </a>   
    </button>
  );
}

    // <button className="px-6 py-2 bg-blue-300 font-semibold text-slate-800 rounded-lg" type="button" onClick={() => signOut()}>
    //   Sign Out
    // </button>
