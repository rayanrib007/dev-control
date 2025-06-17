/* eslint-disable @typescript-eslint/no-unused-vars */
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        {
          type: "fail",
          message: "N.A.",
        },
        { status: 401 }
      );
    }
    const data = await prismaClient.ticket.findMany({
      where: {
        userId: session.user.id,
        status: "Aberto",
      },
      include: {
        customer: true,
      },
    });
    return NextResponse.json({ type: "success", message: "success", data });
  } catch (error) {
    return NextResponse.json(
      {
        type: "fail",
        message: "Falha interna do servidor",
      },
      { status: 500 }
    );
  }
}
