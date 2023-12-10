import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(request) {
  const body = await request.json();
  await prisma.goal.create({
    data: {
      name: body.name,
      userId: body.userId,
    },
  });

  return NextResponse.json({ message: 'Goal Created'});
}