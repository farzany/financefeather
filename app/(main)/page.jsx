import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AutoTransactions from '@/components/AutoTransactions';
import { SignOutButton } from '@/components/Buttons';
import Distributions from '@/components/Distributions';
import GeneralInfo from '@/components/GeneralInfo';
import Goals from '@/components/Goals';
import LeftNav from '@/components/LeftNav';
import prisma from '@/lib/prisma';

// Uncomment your component
export default async function Home() {
  const session = await getServerSession(authOptions);

  const goals = await prisma.goal.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return (
    <main className="flex h-screen w-full flex-col bg-[#2E2E48] md:flex-row">
      {/* <Goals goals={goals} /> */}
      {/* <AutoTransactions /> */}
      <div>
        <LeftNav/>
      </div>
      <div className="custom-grid-rows grid h-full min-w-[500px] grid-cols-1 overflow-y-auto border-[#3A3958] bg-[#3A3958] text-violet-200 md:grid-cols-2 lg:w-3/4 lg:grid-cols-4">
        <div className="col-span-3 row-span-1 ml-8 mt-7 h-fit w-full text-4xl font-medium">
          Hello, {session.user.name.split(' ')[0]}! Welcome back 👋
        </div>
        <div className="col-span-1 mx-6 h-[350px] rounded-2xl bg-[#2E2E48] md:col-span-2 lg:col-span-4">
          <Distributions/>
        </div>
        <div className="col-span-1 row-span-1 my-2 ml-6 mr-1 flex flex-col items-center justify-center rounded-2xl bg-[#2E2E48] md:col-span-2">
          <Goals goals={goals} />
        </div>
        <div className="col-span-1 row-span-1 my-2 ml-1 mr-6 flex flex-col items-center justify-center rounded-2xl bg-[#2E2E48] md:col-span-2">
          <AutoTransactions />
        </div>
      </div>
      <div>
        <GeneralInfo/>
      </div>
    </main>
  );
}
