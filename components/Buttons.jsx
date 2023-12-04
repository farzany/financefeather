'use client';

import React from 'react';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button className="px-6 py-2 bg-blue-300 font-semibold text-slate-800 rounded-lg" type="button" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
