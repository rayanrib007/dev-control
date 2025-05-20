/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { IClientRegisterProtocol } from "@/interfaces/api/IClient";

export async function POST(request: Request) {
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
    const clientData: IClientRegisterProtocol = await request.json();
    const data = await prismaClient.customer.create({
      data: {
        ...clientData,
        address: clientData.address || "",
        userId: session.user.id,
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
    const data = await prismaClient.customer.findMany({
      where: {
        userId: session.user.id,
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

export async function DELETE(request: Request) {
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
    const clientId: { clientId: string } = await request.json();
    const data = await prismaClient.customer.findUnique({
      where: {
        id: clientId.clientId,
      },
    });
    if (!data) {
      return NextResponse.json(
        {
          type: "fail",
          message: "N.E.",
        },
        { status: 400 }
      );
    }
    await prismaClient.customer.delete({
      where: {
        id: clientId.clientId,
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
