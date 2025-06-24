"use client";
import { MouseEvent, useContext, useRef } from "react";
import { ModalContext } from "@/providers/modal";

export function CModalViewInfos() {
  const { handleModalVisible } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  function handleModalClick(e: MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleModalVisible();
    }
  }
  return (
    <section
      className="absolute w-full h-full bg-black/50 flex items-center justify-center"
      onClick={handleModalClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-4/5 md:w-1/2 max-w-2xl shadow-lg bg-white rounded-md p-3"
          ref={modalRef}
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold text-lg md:text-2xl">
              Detalhes do chamado
            </h1>
            <button
              className="bg-red-500 p-1 px-2 text-white rounded cursor-pointer"
              onClick={handleModalVisible}
            >
              Fechar
            </button>
          </div>
          <div>
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Nome:</h2>
              <p>Problema no pc</p>
            </div>
            <div className="flex flex-wrap flex-col gap-1 mb-2">
              <h2 className="font-bold">Descrição:</h2>
              <p>Teste aqui da descrição</p>
            </div>
            <div className="w-full border-b-[1.5px] my-4"></div>
            <h1 className="font-bold text-lg mb-4">Detalhes do cliente</h1>
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Nome:</h2>
              <p>Mercado</p>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Telefone:</h2>
              <p>9999999999</p>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Email:</h2>
              <p>test@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Endereço:</h2>
              <p>Avenida Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
