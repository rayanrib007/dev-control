import CClientRegisterForm from "@/components/dashboard/clients/CClientRegisterForm";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import Link from "next/link";

export default function CTNNewClient() {
  return (
    <CCenterContentOnPage>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/clients"
            className="bg-gray-900 px-4 py-1 text-white rounded"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo cliente</h1>
        </div>
        <CClientRegisterForm />
      </main>
    </CCenterContentOnPage>
  );
}
