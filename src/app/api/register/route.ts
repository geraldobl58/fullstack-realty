import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  const { fullname, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      fullname,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
