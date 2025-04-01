import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export default function CHeaderDefault() {
  return (
    <header className="w-full flex items-center justify-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">DEV</span>
            <span>CONTROLE</span>
          </h1>
        </Link>
        <nav className="flex items-center gap-4 ml-auto">
          <Link href="/dashboard">
            <FiUser size={26} color="#4b5563" />
          </Link>
          <button>
            <FiLogOut size={26} color="#4b5563" />
          </button>
        </nav>
      </div>
    </header>
  );
}
