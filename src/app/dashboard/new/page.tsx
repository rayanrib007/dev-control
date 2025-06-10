import CTNViewDashboardForm from "@/containers/dashboard/CTNViewDashboardForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PNewDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }

  return <CTNViewDashboardForm />;
}
