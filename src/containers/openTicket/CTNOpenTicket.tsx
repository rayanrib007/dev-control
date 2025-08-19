/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CInputDinamicWidth } from "@/components/generals/CUiLib";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";
import COpenTicketForm from "@/components/openTicket/COpenTicketForm";
import api from "@/lib/api";

const schema = z.object({
  email: z
    .string()
    .email("Digite o email do cliente para localizar.")
    .min(1, "O campo email é obrigatório."),
});

type FormData = z.infer<typeof schema>;

export type clientDataInfo = {
  id: string;
  name: string;
};

export default function CTNOpenTicket() {
  const [client, setClient] = useState<clientDataInfo | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function handleClearClient() {
    setClient(null);
    setValue("email", "");
  }

  async function handleSearchClient(data: FormData) {
    try {
      const response = await api.get(`/api/client/search?email=${data.email}`);
      setClient(response.data.data);
    } catch (error: any) {
      setError("email", { message: error.response.data.message });
      setValue("email", "");
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <h1 className="font-bold text-3xl text-center mt-24">Abrir chamado</h1>
      <main className="flex flex-col mt-4 mb-2">
        {client ? (
          <>
            <div className="bg-slate-100 py-6 px-4 rounded flex items-center justify-between">
              <p className="text-lg">
                <strong>Cliente selecionado: </strong> {client.name}
              </p>
              <button
                className="text-red-600 cursor-pointer h-11 px-2 flex items-center justify-center rounded"
                onClick={handleClearClient}
              >
                {<FiX size={24} />}
              </button>
            </div>
            <COpenTicketForm client={client} />
          </>
        ) : (
          <form
            className="bg-slate-100 py-6 px-2 rounded"
            onSubmit={handleSubmit(handleSearchClient)}
          >
            <div className="flex flex-col gap-3">
              <CInputDinamicWidth
                register={register}
                name="email"
                type="email"
                placeholder="Digite o email do cliente..."
                error={errors.email?.message}
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-500 flex flex-row gap-3 px-2 h-11 items-center justify-center rounded text-white font-bold"
              >
                Procurar Cliente <FiSearch size={24} color="#FFF" />
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
