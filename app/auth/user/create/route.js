import sha256 from 'crypto-js/sha256';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  const body = await request.json();

  const userExists = await prisma.user.count({
    where: {
      email: body.email.toString().toLowerCase(),
    },
  }) !== 0;

  if (userExists) {
    return NextResponse.json({ error: 'This email is already in use.' });
  }

  const account = await prisma.user.create({
    data: {
      name: body.name.toString(),
      email: body.email.toString().toLowerCase(),
      password: sha256(body.password).toString(),
    },
  });

  return NextResponse.json({ account: account });
}
