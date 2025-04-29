import CCenterContentOnPage from "@/components/generals/CCenterContentOnPage";
import Link from "next/link";

export default function CHeaderDashboard() {
  return (
    <CCenterContentOnPage>
      <header className="w-full flex gap-4 bg-gray-900 my-4 p-3 rounded items-center">
        <Link
          href={"/dashboard"}
          className="text-white hover:font-bold duration-200"
        >
          Chamados
        </Link>
        <Link
          href={"/dashboard/clients"}
          className="text-white hover:font-bold duration-200"
        >
          Clientes
        </Link>
      </header>
    </CCenterContentOnPage>
  );
}
