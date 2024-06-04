import { paramsProps, responseData } from '@/lib/types';
import { post, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params}: paramsProps) {
  const getDataById = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!getDataById) {
    const returnedDataError: responseData = {
      message: "data not found",
      status: 404
    }
    return Response.json(returnedDataError, {status: 404});
  }
  const returnedDataSuccess: responseData = {
    data: getDataById,
    message: "OK",
    status: 200
  }
  return Response.json(returnedDataSuccess, {status: 200})
}

export async function PATCH (request: NextRequest, {params}: paramsProps){
  const data: post = await request.json();
  const updateDataById = await prisma.post.update({
    data: {
      todo: data.todo,
      completed: data.completed
    },
    where: {
      id: parseInt(params.id)
    }
  })
  if (!updateDataById) {
    const returnedDataError: responseData = {
      message: 'invalid id ',
      status: 400,
    };
    return NextResponse.json(returnedDataError, {status: 400});
  }

  const returnedDataSuccess: responseData = {
    message: 'success',
    status: 200
  }

  return NextResponse.json(returnedDataSuccess, {status: 200});
}

export async function DELETE (request: NextRequest, {params}: paramsProps) {
  const deleteDataById = await prisma.post.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!deleteDataById) {
    const returnedDataError: responseData = {
      message: 'invalid id ',
      status: 400,
    };
    return NextResponse.json(returnedDataError, {status:400});
  }

  const returnedDataSuccess: responseData = {
    message: 'success',
    status: 200,
  }

  return NextResponse.json(returnedDataSuccess, {status: 200});
} 
