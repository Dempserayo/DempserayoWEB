'use client'

import { FiCopy } from "react-icons/fi";

export default function ViewDownload() {
    return(
        <section className="w-full h-96 bg-slate-500 flex flex-col justify-center items-center overflow-hidden gap-20" id="Download">
            <section className="w-full max-w-7xl flex flex-col gap-4 p-10 sm:p-20">
                <p className="text-slate-200 text-xs uppercase font-thin">
                    Get started in seconds
                </p>

                <div className="w-full flex items-center group gap-2">
                    <div className="w-full h-20 flex items-center p-10 bg-slate-800/50 ">
                        <span className="text-slate-200 font-mono text-sm tracking-wide">
                            <span className="text-slate-500 select-none">$ </span>
                            npm i dempserayo-ui
                        </span>
                    </div>

                    <button 
                        onClick={() => { navigator.clipboard.writeText("npm i dempserayo-ui");}} 
                        className="bg-slate-800/50 text-slate-500 border border-slate-500 hover:border-rose-500 hover:bg-rose-200/50 hover:text-rose-500  w-20 h-20 hidden sm:flex justify-center items-center transition-all duration-500 group cursor-not-allowed" 
                        title="Copy to clipboard"
                    >
                        <FiCopy />                
                    </button>
                </div>
            </section>

        </section>
    )
}
