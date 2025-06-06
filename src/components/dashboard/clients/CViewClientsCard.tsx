import { IClientDataProtocol } from "@/interfaces/IClients";

export default function CViewClientsCard({
  clientData,
  handleDeleteClient,
}: {
  clientData: IClientDataProtocol;
  handleDeleteClient: (clientId: string) => void;
}) {
  return (
    <article className="flex flex-col bg-gray-100 border-gray-200 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2>
        <a className="font-bold">Nome:</a>
        {clientData.name}
      </h2>
      <p>
        <a className="font-bold">Email:</a> {clientData.email}
      </p>
      <p>
        <a className="font-bold">Telefone:</a> {clientData.phone}
      </p>
      <button
        className="bg-red-500 px-4 rounded text-white mt-2 self-start cursor-pointer"
        onClick={() => {
          handleDeleteClient(clientData.id);
        }}
      >
        Deletar
      </button>
    </article>
  );
}
