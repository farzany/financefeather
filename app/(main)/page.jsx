import AutoTransactions from '@/components/AutoTransactions';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
import LeftNav from '@/components/LeftNav';
import GeneralInfo from '@/components/GeneralInfo';
import React from 'react';

// Uncomment your component
export default async function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full bg-[#2E2E48]">
      {/* <Goals /> */}
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
      <div>
        <LeftNav/>
      </div>
        <div className='custom-grid-rows grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-3/4 h-full min-w-[500px] overflow-y-auto gap-4 text-violet-200 bg-[#3A3958] border-bg-[#3A3958] rounded-3xl'> 
          <div className='ml-8 mt-12 row-span-1 whitespace-nowrap'>
            Hi Cameron, welcome back!
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-4 row-span-1 mx-6 mb-4 rounded-3xl bg-[#2E2E48]'>
            1
          </div>

          <div className='col-span-1 mx-6 md:col-span-2 row-span-1 lg:ml-6 mb-4 rounded-3xl bg-[#2E2E48]'>
            2
          </div>

          <div className='col-span-1 mx-6 md:col-span-2 row-span-1 lg:mr-6 mb-4 rounded-3xl bg-[#2E2E48]'>
            3
          </div>
        </div>
        <div>
          <GeneralInfo/>  
        </div>
    </main>
  );
}
