/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { IClientRegisterProtocol } from "@/interfaces/api/IClient";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientEmail = searchParams.get("email");
    if (!clientEmail) {
      return NextResponse.json(
        {
          type: "fail",
          message: "Email não informado",
          data: null,
        },
        { status: 400 }
      );
    }
    const data = await prismaClient.customer.findFirst({
      where: {
        email: clientEmail,
      },
      omit: {
        created_at: true,
        updated_at: true,
        phone: true,
        address: true,
        email: true,
        userId: true,
      },
    });
    if (!data) {
      return NextResponse.json(
        {
          type: "fail",
          message: "Usuário não encontrado",
        },
        { status: 400 }
      );
    }
    return NextResponse.json({
      type: "success",
      message: "success",
      data: data,
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
