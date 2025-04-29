import { FiFile, FiTrash2 } from "react-icons/fi";

export default function CViewTicketTable() {
  return (
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
        <tr className="h-16 bg-slate-100 hover:bg-slate-200 duration-300">
          <td className="text-left pl-1">Mercado Patos</td>
          <td className="text-left hidden sm:table-cell">01/01/2023</td>
          <td className="text-left">
            <span className="bg-green-500 px-2 py-1 rounded">Aberto</span>
          </td>
          <td className="text-left">
            <button className="mr-2">
              <FiTrash2 size={24} color="#EF4444" />
            </button>

            <button>
              <FiFile size={24} color="#3B82F6" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
