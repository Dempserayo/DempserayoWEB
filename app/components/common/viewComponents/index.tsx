import Link from "next/link";
import { FiArrowUpRight, FiPackage } from "react-icons/fi";

export default function ViewComponents() {
    return(
      <>
      <section className="w-full h-auto flex flex-col justify-center items-center gap-2 p-10 sm:p-20">
        {/* Basico 1 */}
        <section className="w-full max-w-7xl h-auto font-thin text-xs flex flex-col sm:flex-row gap-2">
                <>
                    <section className="w-full h-auto flex flex-row gap-2">
                        <Link href='/view/component' className="group w-full h-80 flex flex-col bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <span className="w-full flex flex-row justify-between">
                                <p className="uppercase">Layout</p>
                                <FiArrowUpRight />
                            </span>
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="w-full h-full flex justify-center items-center  text-xs font-thin">
                                    {/* <p>Nada por el momento</p> */}
                                </div>
                                <div className="w-full h-auto flex flex-row justify-between items-center gap-1">
                                    <span className="flex flex-row gap-1">
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                    </span>
                                    <span className="flex flex-row justify-center items-center gap-2">
                                        <p className="text-slate-500 p-2">Actualizado</p>
                                        <p className="flex flex-row gap-2 items-center justify-center">
                                            <FiPackage />
                                            0 / 0
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </section>
                </>
                <>
                    <section className="w-full h-auto hidden sm:flex flex-row gap-2">
                    <Link href='/view/component' className="group w-full h-80 flex flex-col bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <span className="w-full flex flex-row justify-between">
                                <p className="uppercase">Footer</p>
                                <FiArrowUpRight />
                            </span>
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="w-full h-full flex justify-center items-center  text-xs font-thin">
                                    {/* <p>Nada por el momento</p> */}
                                </div>
                                <div className="w-full h-auto flex flex-row justify-between items-center gap-1">
                                    <span className="flex flex-row gap-1">
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                    </span>
                                    <span className="flex flex-row justify-center items-center gap-2">
                                        <p className="text-rose-500 p-2">Mantenimiento</p>
                                        <p className="flex flex-row gap-2 items-center justify-center">
                                            <FiPackage />
                                            0 / 0
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </section>
                </>
        </section>

        {/* Bascio 2  */}
        <section className="w-full max-w-7xl h-auto font-thin text-xs hidden sm:flex flex-row gap-2">
                <>
                    <section className="w-full h-auto flex flex-row gap-2">
                    <Link href='/view/component' className="group w-full h-80 flex flex-col bg-transparent border border-slate-200 p-8 cursor-pointer hover:bg-rose-200/50 hover:border-rose-500 hover:text-rose-500 transition-all duration-500">
                            <span className="w-full flex flex-row justify-between">
                                <p className="uppercase">Banners</p>
                                <FiArrowUpRight />
                            </span>
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="w-full h-full flex justify-center items-center  text-xs font-thin">
                                    {/* <p>Nada por el momento</p> */}
                                </div>
                                <div className="w-full h-auto flex flex-row justify-between items-center gap-1">
                                    <span className="flex flex-row gap-1">
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                        <p className="w-4 h-1 bg-slate-200 group-hover:bg-rose-300 transition-all duration-500"></p>
                                    </span>
                                    <span className="flex flex-row justify-center items-center gap-2">
                                        <p className="text-rose-500 p-2">Mantenimiento</p>
                                        <p className="flex flex-row gap-2 items-center justify-center">
                                            <FiPackage />
                                            0 / 0
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </section>
                </>
            </section>
      </section>
      </>
    )
}