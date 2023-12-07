import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import sha256 from 'crypto-js/sha256';

export async function POST(request, { params }) {
  const body = await request.json();
  await prisma.user.create({
    data: {
      name: body.name.toString(),
      email: body.email.toString(),
      password: sha256(body.password).toString(),
    }
  })

  return NextResponse.json({ message: 'User Created'});
}
