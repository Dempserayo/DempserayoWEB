import { FiArrowUpRight } from "react-icons/fi";

export default function ViewComponents() {
    return(
      <>
      <section className="w-full h-screen flex flex-col justify-center items-center gap-2">
            {/* Basico 1 */}
            <section className="w-full max-w-7xl h-auto font-thin text-xs text-slate-500  flex flex-row gap-2">
                <>
                    <section className="w-full h-auto flex flex-row gap-2">
                        <div className="w-full h-80 flex flex-row justify-between bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <p className="uppercase">Layout</p>
                            <FiArrowUpRight />
                        </div>
                    </section>
                </>
                <>
                    <section className="w-full h-auto flex flex-row gap-2">
                        <div className="w-full h-80 flex flex-row justify-between bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <p className="uppercase">Footers</p>
                            <FiArrowUpRight />
                        </div>
                    </section>
                </>
            </section>

            {/* Bascio 2  */}
            <section className="w-full max-w-7xl h-auto font-thin text-xs text-slate-500  flex flex-row gap-2">
                <>
                    <section className="w-full h-auto flex flex-row gap-2">
                        <div className="w-full h-80 flex flex-row justify-between bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <p className="uppercase">Banners</p>
                            <FiArrowUpRight />
                        </div>
                        <div className="w-80 h-80 flex flex-row justify-between bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <p className="uppercase">Banners</p>
                            <FiArrowUpRight />
                        </div>
                
                    </section>
                </>
            </section>

           
      </section>
      </>
    )
}