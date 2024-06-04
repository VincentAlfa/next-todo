import { responseData } from '@/lib/types';
import { post, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();
export const dynamic = 'force dynamic';

export async function GET() {
  const getAllData = await prisma.post.findMany();
  const returnedData: responseData = {
    data: getAllData, 
    message: "OK",
    status: 200
  }
  return NextResponse.json(returnedData);
}

export async function POST(request: NextRequest) {
  const data: post= await request.json();
  await prisma.post.create({
    data: {
      todo: data.todo,
      completed: data.completed
    },
  });

  const returnedData: responseData = {
    message: 'created',
    status: 201,
  };

  return NextResponse.json(returnedData)
}
