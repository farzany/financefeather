import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AutoTransactions from '@/components/AutoTransactions';
import { SignOutButton } from '@/components/Buttons';
import Distributions from '@/components/Distributions';
import Goals from '@/components/Goals';
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
    <main className="relative flex h-screen items-center justify-center">
      <SignOutButton />
      <Goals goals={goals} />
      {/* <AutoTransactions /> */}
      {/* <Distributions /> */}
    </main>
  );
}
