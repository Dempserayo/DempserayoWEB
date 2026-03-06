
export default function Navbar() {
    return(
        <nav className="w-full max-w-7xl h-auto py-20  flex flex-row justify-between items-center text-xs text-slate-500 font-thin  border-b border-slate-300">
          <section className="flex flex-row  items-center gap-4">
            <p className="font-black text-xl">D-UI</p>
            <p className="text-xs">Component</p>
          </section>

          <section className="flex flex-row gap-4">
            <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Docs</p>
            <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Installation</p>
            <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Components</p>
            <p className="cursor-pointer hover:text-rose-500 border-b border-slate-100 hover:border-rose-500 py-2 transition-all duration-500">Showroom</p>
          </section>

          {/* <section className="flex flex-row gap-4">
            <p className="w-auto h-auto flex justify-center items-center text-lg cursor-pointer hover:text-rose-500"><FiGithub /></p>
            <p className="w-auto h-auto flex justify-center items-center text-lg cursor-pointer hover:text-rose-500"><FiDownloadCloud /></p>
          </section> */}
        </nav>
    )
}