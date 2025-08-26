"use client";

import CViewTicketTable from "@/components/dashboard/CViewTicketTable";
import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import { ITicketDataProtocol } from "@/interfaces/ITickets";
import api from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function CTNViewDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [ticketsData, setTicketsData] = useState<ITicketDataProtocol[]>([]);

  async function handleGetTicketsData() {
    setIsLoading(true);
    const response = await api.get("/api/ticket/");
    setIsLoading(false);
    setTicketsData(response.data.data);
  }

  useEffect(() => {
    handleGetTicketsData();
  }, []);

  return (
    <CCenterContentOnPage>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-900 px-2 py-1 rounded cursor-pointer"
              onClick={handleGetTicketsData}
            >
              <FiRefreshCcw size={24} color="#FFF" />
            </button>
            <Link
              href={"/dashboard/new"}
              className="bg-blue-500 px-4 py-1 rounded text-white"
            >
              Abrir chamado
            </Link>
          </div>
        </div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          ticketsData && (
            <>
              <CViewTicketTable
                ticketsData={ticketsData}
                fHandleGetTicketsData={handleGetTicketsData}
              />
              {ticketsData.length === 0 && (
                <p className="text-gray-600">Não há chamados...</p>
              )}
            </>
          )
        )}
      </main>
    </CCenterContentOnPage>
  );
}
