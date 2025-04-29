import CViewTicketTable from "@/components/dashboard/CViewTicketTable";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import Link from "next/link";

export default function CTNViewDashboard() {
  return (
    <CCenterContentOnPage>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link
            href={"/dashboard/new"}
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Abrir chamado
          </Link>
        </div>
        <CViewTicketTable />
      </main>
    </CCenterContentOnPage>
  );
}
