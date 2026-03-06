import { FiDownloadCloud, FiGithub } from "react-icons/fi";

export default function Navbar() {
    return(
        <nav className="w-full max-w-7xl h-auto py-20  flex flex-row justify-between items-center text-xs text-slate-800 font-thin border-b border-slate-300">
          <section className="flex flex-row justify-center items-center gap-2">
            <p className="text-slate-800 font-black text-2xl">DUI</p>
            <h1 className="cursor-pointer hover:text-rose-500">Components</h1>
          </section>

          <section className="flex flex-row gap-4">
            <p className="cursor-pointer hover:text-rose-500">Docs</p>
            <p className="cursor-pointer hover:text-rose-500">Installation</p>
            <p className="cursor-pointer hover:text-rose-500">Components</p>
            <p className="cursor-pointer hover:text-rose-500">Showroom</p>
          </section>

          <section className="flex flex-row gap-4">
            <p className="w-auto h-auto flex justify-center items-center text-lg cursor-pointer hover:text-rose-500"><FiGithub /></p>
            <p className="w-auto h-auto flex justify-center items-center text-lg cursor-pointer hover:text-rose-500"><FiDownloadCloud /></p>
          </section>
        </nav>
    )
}