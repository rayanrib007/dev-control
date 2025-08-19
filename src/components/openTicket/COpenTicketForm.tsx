/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { CInputDinamicWidth } from "@/components/generals/CUiLib";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "@/lib/api";
import { clientDataInfo } from "@/containers/openTicket/CTNOpenTicket";

const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório."),
  description: z.string().min(1, "Descreva um sobre o seu problema..."),
});

type FormData = z.infer<typeof schema>;

export default function COpenTicketForm({
  client,
}: {
  client: clientDataInfo;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function handleRegisterTicket(data: FormData) {
    const response = await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      clientId: client.id,
    });
  }

  return (
    <form
      className="bg-slate-100 mt-6 p-4 rounded flex flex-col"
      onSubmit={handleSubmit(handleRegisterTicket)}
    >
      <label className="mb-1 font-medium text-lg">Nome do chamado</label>
      <CInputDinamicWidth
        name="name"
        type="text"
        placeholder="Digite o nome..."
        error={errors.name?.message}
        register={register}
      />
      <label className="mb-1 font-medium text-lg">Descreva o problema</label>
      <textarea
        className="w-full border-2 border-gray-300 rounded-md h-24 resize-none mb-1 px-2"
        placeholder="Descreva o seu problema..."
        id="description"
        {...register("description")}
      ></textarea>
      {errors.description?.message && (
        <span className="text-red-500 mb-4">{errors.description.message}</span>
      )}
      <button className="w-full bg-blue-500 cursor-pointer h-11 px-4 rounded text-white font-bold">
        Cadastrar
      </button>
    </form>
  );
}
