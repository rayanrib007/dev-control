import CTNNewClient from "@/containers/dashboard/clients/CTNNewClient";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PNewClient() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }
  return <CTNNewClient />;
}
