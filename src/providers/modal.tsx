"use client";
import { CModalViewInfos } from "@/components/generals/CModalViewInfos";
import { IClientDataProtocol } from "@/interfaces/IClients";
import { ITicketDataProtocol } from "@/interfaces/ITickets";
import { createContext, Dispatch, ReactNode, useState } from "react";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: ticketInfos | null;
  setTicket: Dispatch<React.SetStateAction<ticketInfos | null>>;
}

export interface ticketInfos {
  ticket: ITicketDataProtocol;
  client: IClientDataProtocol | null;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<ticketInfos | null>(null);

  function handleModalVisible() {
    setVisible(!visible);
  }
  return (
    <ModalContext.Provider
      value={{ visible, handleModalVisible, ticket, setTicket }}
    >
      {visible && <CModalViewInfos ticket={ticket} />}
      {children}
    </ModalContext.Provider>
  );
}
