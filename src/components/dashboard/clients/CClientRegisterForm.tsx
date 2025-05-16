"use client";

import { CInputDinamicWidth } from "@/components/generals/CUiLib";
import api from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .email("Digite um email válido")
    .min(1, "O campo email é obrigatório"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}?/.test(value)
      );
    },
    {
      message: "O campo telefone deve estar (DDD) 999999999",
    }
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function CClientRegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function handleRegisterClient(data: FormData) {
    const response = await api.post("/api/client", data);

    if (response.status === 200) {
      router.refresh();
      router.push("/dashboard/clients");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegisterClient)}
      className="flex flex-col mt-6"
    >
      <label className="mb-1 text-lg font-medium">Nome completo</label>
      <CInputDinamicWidth
        name="name"
        type="text"
        placeholder="Digite seu nome completo..."
        error={errors.name?.message}
        register={register}
      />
      <section className="flex flex-col md:flex-row my-2 gap-0 md:gap-2">
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Telefone</label>
          <CInputDinamicWidth
            name="phone"
            type="text"
            placeholder="(DD)999999999"
            error={errors.phone?.message}
            register={register}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Email</label>
          <CInputDinamicWidth
            name="email"
            type="email"
            placeholder="Digite seu email..."
            error={errors.email?.message}
            register={register}
          />
        </div>
      </section>
      <label className="mb-1 text-lg font-medium">Endereço</label>
      <CInputDinamicWidth
        name="address"
        type="text"
        placeholder="Digite seu endereço do cliente..."
        error={errors.address?.message}
        register={register}
      />
      <button
        type="submit"
        className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold cursor-pointer"
      >
        Cadastrar
      </button>
    </form>
  );
}
