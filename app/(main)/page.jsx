import { SignOutButton } from '@/components/Buttons';
import AutoTransactions from '@/components/AutoTransactions';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
import prisma from '@/lib/prisma';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

// Uncomment your component
export default async function Home() {

  const session = await getServerSession(authOptions);

  const goals = await prisma.goal.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      id: 'desc',
    }
  });
  
  return (
    <main className="relative flex justify-center items-center h-screen">
      <SignOutButton />
      {/* <Goals goals={goals} /> */}
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
    </main>
  );
}
