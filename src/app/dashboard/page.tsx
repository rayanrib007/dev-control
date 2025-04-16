import CTNViewDashboard from "@/containers/dashboard/CTNViewDashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }

  return <CTNViewDashboard />;
}
