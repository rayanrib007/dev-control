import CTNViewDashboardForm from "@/containers/dashboard/CTNViewDashboardForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PrismaClient from "@/lib/prisma";

export default async function PNewDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }

  async function handleRegisterTicket(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const customerId = formData.get("client") as string;

    await PrismaClient.ticket.create({
      data: {
        name,
        description,
        userId: session!.user.id,
        customerId,
        status: "Aberto",
      },
    });

    redirect("/dashboard");
  }

  return <CTNViewDashboardForm fHandleRegisterTicket={handleRegisterTicket} />;
}
