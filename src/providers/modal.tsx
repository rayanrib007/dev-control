/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { CModalViewInfos } from "@/components/generals/CModalViewInfos";
import { IClientDataProtocol } from "@/interfaces/IClients";
import { ITicketDataProtocol } from "@/interfaces/ITickets";
import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: ticketInfos | null;
}

interface ticketInfos {
  ticket: ITicketDataProtocol;
  client: IClientDataProtocol | null;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [ticket, setTicket] = useState<ticketInfos | null>(null);

  function handleModalVisible() {
    setVisible(!visible);
  }
  return (
    <ModalContext.Provider value={{ visible, handleModalVisible, ticket }}>
      {visible && <CModalViewInfos />}
      {children}
    </ModalContext.Provider>
  );
}
