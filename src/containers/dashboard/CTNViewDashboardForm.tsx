"use client";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import { IClientDataProtocol } from "@/interfaces/IClients";
import api from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CTNViewDashboardForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [clientsData, setClientsData] = useState<IClientDataProtocol[]>([]);

  async function getClientsData() {
    setIsLoading(true);
    const response = await api.get("/api/client");
    setIsLoading(false);
    setClientsData(response.data.data);
  }

  useEffect(() => {
    getClientsData();
  }, []);

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
        {!isLoading ? (
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
            {clientsData.length > 0 ? (
              <>
                <select className="w-full border-2 border-gray-300 rounded-md px-2 mb-2 h-11 bg-white">
                  {clientsData.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold cursor-pointer"
                >
                  Cadastrar
                </button>
              </>
            ) : (
              <div className="w-full p-2 border-2 border-red-200 rounded-md bg-red-100">
                <p className="text-red-400">
                  Para abir um novo chamado é necessário{" "}
                  <strong className=" hover:underline">
                    <Link href="/dashboard/clients/new">cadastrar</Link>
                  </strong>{" "}
                  pelo menos um cliente!
                </p>
              </div>
            )}
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </CCenterContentOnPage>
  );
}
