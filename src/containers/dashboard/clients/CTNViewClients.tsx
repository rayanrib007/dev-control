"use client";
import CViewClientsCard from "@/components/dashboard/clients/CViewClientsCard";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import { IClientDataProtocol } from "@/interfaces/IClients";
import api from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CTNViewClients() {
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
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus Clients</h1>
          <Link
            href={"/dashboard/clients/new"}
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Novo cliente
          </Link>
        </div>
        {!isLoading ? (
          clientsData.length > 0 ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {clientsData.map((clientData) => (
                <CViewClientsCard key={clientData.id} clientData={clientData} />
              ))}
            </section>
          ) : (
            <p>Não há clientes cadastrados</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </CCenterContentOnPage>
  );
}
