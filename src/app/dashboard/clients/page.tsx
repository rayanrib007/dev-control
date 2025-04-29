import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PClients() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return redirect("/");
  }

  return (
    <CCenterContentOnPage>
      <main>
        <div>
          <h1>Meus Clients</h1>
        </div>
      </main>
    </CCenterContentOnPage>
  );
}
