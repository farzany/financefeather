import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(
    request,
    { params },
  ) {
    await prisma.goal.create({
        data: {
            name: params.name,
        }
    })
  
    return NextResponse.json({ message: 'Goal Created'});
  }