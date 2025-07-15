/* eslint-disable @typescript-eslint/no-explicit-any */
import { IClientDataProtocol } from "@/interfaces/IClients";
import { ITicketDataProtocol } from "@/interfaces/ITickets";
import api from "@/lib/api";
import { ModalContext } from "@/providers/modal";
import moment from "moment";
import { useContext, useState } from "react";
import { FiFile, FiCheckSquare } from "react-icons/fi";

export default function CViewTicketTable({
  ticketsData,
  fHandleGetTicketsData,
}: {
  ticketsData: ITicketDataProtocol[];
  fHandleGetTicketsData: () => void;
}) {
  const [message, setMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const { handleModalVisible, setTicket } = useContext(ModalContext);

  async function handleFinalizedTicket(ticketId: string) {
    try {
      await api.patch(`/api/ticket`, { id: ticketId });
      fHandleGetTicketsData();
      setTicket(null);
    } catch (error: any) {
      setMessage({ type: "fail", message: error.message });
      setTimeout(() => setMessage(null), 2000);
    }
  }

  function handleViewModal(
    ticket: ITicketDataProtocol,
    client: IClientDataProtocol
  ) {
    setTicket({
      ticket: ticket,
      client: client,
    });
    handleModalVisible();
  }

  return (
    <>
      <table className="min-w-full my-2">
        <thead>
          <tr>
            <th className="font-medium text-left">Cliente</th>
            <th className="font-medium text-left hidden sm:block">
              Data Cadastro
            </th>
            <th className="font-medium text-left">Status</th>
            <th className="font-medium text-left">#</th>
          </tr>
        </thead>
        <tbody className=" divide-y-2 divide-slate-200">
          {ticketsData.map((ticket) => (
            <tr
              key={ticket.id}
              className="h-16 bg-slate-100 hover:bg-slate-200 duration-300"
            >
              <td className="text-left pl-1">{ticket.customer.name}</td>
              <td className="text-left hidden sm:table-cell">
                {moment(ticket.created_at).format("DD/MM/YYYY")}
              </td>
              <td className="text-left">
                <span className="bg-green-500 px-2 py-1 rounded">
                  {ticket.status}
                </span>
              </td>
              <td className="text-left">
                <button
                  className="mr-3"
                  onClick={() => handleFinalizedTicket(ticket.id)}
                >
                  <FiCheckSquare
                    className="hover:cursor-pointer"
                    size={24}
                    color="#131313"
                  />
                </button>
                <button>
                  <FiFile
                    className="hover:cursor-pointer"
                    size={24}
                    color="#3B82F6"
                    onClick={() => handleViewModal(ticket, ticket.customer)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {message && (
        <div className="w-full bg-red-200 border-2 border-red-300 rounded-md p-2">
          <span className="text-red-400">{message.message}</span>
        </div>
      )}
    </>
  );
}
