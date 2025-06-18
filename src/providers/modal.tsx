"use client";
import { CModalViewInfos } from "@/components/generals/CModalViewInfos";
import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  function handleModalVisible() {
    setVisible(!visible);
  }
  return (
    <ModalContext.Provider value={{ visible, handleModalVisible }}>
      {visible && <CModalViewInfos />}
      {children}
    </ModalContext.Provider>
  );
}
