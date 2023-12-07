import AutoTransactions from '@/components/AutoTransactions';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
import LeftNav from '@/components/LeftNav';
import GeneralInfo from '@/components/GeneralInfo';
import React from 'react';

// Uncomment your component
export default async function Home() {
  return (
    <main className="relative flex justify-center items-center h-screen w-screen bg-[#2E2E48]">
      {/* <Goals /> */}
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
      <LeftNav/>
      <div className='grid grid-cols-4 grid-rows-3 w-full h-full gap-4  text-violet-200 bg-[#3A3958] border-bg-[#3A3958] rounded-3xl overflow-hidden' style={{ gridTemplateRows: 'auto 1fr 1fr' }}> 
        <div className=' ml-8 mt-12 row-span-1 '>
          Hi Cameron, welcome back
        </div>
        <div className='col-span-4 row-span-1 mx-6 mb-4 rounded-3xl bg-[#2E2E48]'>
        </div>

        <div className='col-span-2 row-span-1 ml-6 mb-4 rounded-3xl bg-[#2E2E48]'>
        </div>

        <div className='col-span-2 row-span-1 mr-6 mb-4 rounded-3xl bg-[#2E2E48]'>
        </div>
      </div>
      <GeneralInfo/>  

    </main>
  );
}
