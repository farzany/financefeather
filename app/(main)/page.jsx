import AutoTransactions from '@/components/AutoTransactions';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
import LeftNav from '@/components/LeftNav';
import GeneralInfo from '@/components/GeneralInfo';
import React from 'react';

// Uncomment your component
export default async function Home() {
  return (
    <main className="relative flex justify-center items-center h-screen">
      {/* <Goals /> */}
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
      <LeftNav/>
    </main>
  );
}
