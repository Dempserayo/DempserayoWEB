import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return(
        <nav className="w-full h-auto mb-20 mt-20 flex flex-row justify-center items-center text-xs font-thin ">
          <main className="w-full max-w-7xl flex flex-row  justify-between items-center">
            <section className="flex flex-row  items-center gap-4">
              <Link href='/' className="text-xl hover:text-rose-500 transition-all duration-300 ease-in-out">D-UI</Link>
              <p className="text-xs">Component</p>
            </section>

            <section className="hidden sm:flex flex-row gap-4 ">
                <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-300 ease-in-out">Docs</p>
                <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-300 ease-in-out">Installation</p>
                <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-300 ease-in-out ">Components</p>
                <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-300 ease-in-out ">Showroom</p>
                <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 flex justify-center items-center transition-all duration-300 ease-in-out"><FiSearch /></p>
            </section>
          </main>
        </nav>
    )
}