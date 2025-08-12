"use client";
import { CInputDinamicWidth } from "@/components/generals/CUiLib";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório."),
  description: z.string().min(1, "Descreva um sobre o seu problema..."),
});

type FormData = z.infer<typeof schema>;

export default function COpenTicketForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form className="bg-slate-100 mt-6 p-4 rounded">
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
        className="w-full rounded-md h-24 resize-none mb-2 px-2"
        placeholder="Descreva o seu problema..."
        id="description"
        {...register("description")}
      ></textarea>
      {errors.description?.message && (
        <span className="text-red-500 my-1">{errors.description.message}</span>
      )}
      <button className="w-full bg-blue-500 h-11 px-4 rounded text-white font-bold">
        Cadastrar
      </button>
    </form>
  );
}
