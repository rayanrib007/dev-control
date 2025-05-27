import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import Link from "next/link";

export default function PNewDashboard() {
  return (
    <CCenterContentOnPage>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="bg-gray-900 px-4 py-1 text-white rounded"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo Chamado</h1>
        </div>
        <form className="flex flex-col mt-6">
          <label className="mb-1 font-medium text-lg">Nome do chamado</label>
          <input
            className="w-full border-2 border-gray-300 rounded-md px-2 mb-2 h-11"
            type="text"
            placeholder="Digite o nome do chamado..."
          />
          <label className="mb-1 font-medium text-lg">Nome do chamado</label>
          <textarea
            className="w-full border-2 border-gray-300  rounded-md px-2 mb-2 h-24 resize-none"
            placeholder="Descreva o problema..."
          ></textarea>
          <label className="mb-1 font-medium text-lg">
            Selecione o cliente
          </label>
          <select className="w-full border-2 border-gray-300 rounded-md px-2 mb-2 h-11 bg-white">
            <option value="client1">Cliente 1</option>
          </select>
        </form>
      </main>
    </CCenterContentOnPage>
  );
}
