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

export async function PATCH(request: Request) {
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
    const { id }: { id: string } = await request.json();
    const findTicket = await prismaClient.ticket.findFirst({
      where: {
        id,
      },
    });
    if (!findTicket) {
      return NextResponse.json(
        {
          type: "fail",
          message: "N.E.",
        },
        { status: 400 }
      );
    }
    const data = await prismaClient.ticket.update({
      where: {
        id,
      },
      data: {
        status: "Fechado",
      },
    });
    return NextResponse.json({
      type: "success",
      message: "success",
      data: null,
    });
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
