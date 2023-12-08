import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(request, { params }) {
  const body = await request.json();
  await prisma.goal.create({
    data: {
        name: body.name,
        userId: body.userId,
    }
  })

  return NextResponse.json({ message: 'Goal Created'});
}