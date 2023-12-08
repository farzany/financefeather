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
      {/* <Distributions /> */}
      <div>
        <LeftNav/>
      </div>
      <div className="custom-grid-rows grid h-full min-w-[500px] grid-cols-1 gap-4 overflow-y-auto rounded-3xl border-[#3A3958] bg-[#3A3958] text-violet-200 md:grid-cols-2 lg:w-3/4 lg:grid-cols-4">
        <div className="row-span-1 ml-8 mt-12 whitespace-nowrap text-4xl font-medium">
          Hello, {session.user.name.split(' ')[0]}! Welcome back 👋
        </div>
        <div className="col-span-1 row-span-1 mx-6 mb-4 flex items-center justify-center rounded-3xl bg-[#2E2E48] md:col-span-2 lg:col-span-4">
          1
        </div>
        <div className="col-span-1 row-span-1 mx-6 mb-4 flex items-center justify-center rounded-3xl bg-[#2E2E48] md:col-span-2 lg:ml-6">
          2
        </div>
        <div className="col-span-1 row-span-1 mx-6 mb-4 flex items-center justify-center rounded-3xl bg-[#2E2E48] md:col-span-2 lg:mr-6">
          3
        </div>
      </div>
      <div>
        <GeneralInfo/>
      </div>
    </main>
  );
}
