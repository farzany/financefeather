import AutoTransactions from '@/components/AutoTransactions';
import { SignOutButton } from '@/components/Buttons';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
import React from 'react';

// Uncomment your component
export default async function Home() {
  return (
    <main className="relative flex justify-center items-center h-screen">
      <SignOutButton />
      {/* <Goals /> */}
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
    </main>
  );
}
