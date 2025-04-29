import CViewClientsCard from "@/components/dashboard/clients/CViewClientsCard";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import Link from "next/link";

export default function CTNViewClients() {
  return (
    <CCenterContentOnPage>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus Clients</h1>
          <Link
            href={"/dashboard/clients/new"}
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Novo cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <CViewClientsCard />
          <CViewClientsCard />
          <CViewClientsCard />
        </section>
      </main>
    </CCenterContentOnPage>
  );
}
