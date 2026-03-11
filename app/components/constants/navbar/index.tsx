import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return(
        <nav className="w-full h-auto py-20 px-10   flex flex-row justify-center items-center text-xs font-thin ">
          <section className="w-full max-w-7xl flex flex-row  justify-between items-center">
            <section className="flex flex-row  items-center gap-4">
              <Link href='/' className="font-black text-xl text-slate-500 hover:text-rose-500 transition-all duration-500">D-UI</Link>
              <p className="text-xs">Component</p>
            </section>

            

            <section className="hidden sm:flex flex-row gap-4">
              <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Docs</p>
              <Link href='/#Download' className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Installation</Link>
              <Link href='/view/component' className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Components</Link>
              <Link href='/view/showroom' className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Showroom</Link>
              <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 flex justify-center items-center transition-all duration-500"><FiSearch /></p>
            </section>
          </section>

       
        </nav>
    )
}