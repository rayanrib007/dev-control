import CTNViewClients from "@/containers/dashboard/clients/CTNViewClients";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PClients() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }

  return <CTNViewClients />;
}
