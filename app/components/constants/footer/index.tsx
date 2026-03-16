import Link from "next/link";
import { FiGithub, FiMoon, FiSend } from "react-icons/fi";

export default function Footer(){
    return(
        <section className="w-full h-auto px-10 py-40 flex items-center justify-center text-xs font-thin">
            <section className="w-full max-w-7xl  flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href='/' className="border-b border-slate-200 hover:border-rose-500 py-2  hover:text-rose-500  transition-all duration-500">Documentation</Link>
                    <Link href='/' className="border-b border-slate-200 hover:border-rose-500 py-2  hover:text-rose-500  transition-all duration-500">Frequently Asked Questions</Link>
                    <Link href='/' className="border-b border-slate-200 hover:border-rose-500 py-2  hover:text-rose-500  transition-all duration-500">Contribute to the Project</Link>
                </div>

                <div className="w-full hidden sm:flex flex-row justify-between items-center">
                    
                    <p>
                        © 2026 Dempserayo. All rights reserved. About this website: built with React & Next.js App Router & Server Action
                    </p>
                    
                    <div className="w-80 h-px bg-slate-200/50"></div>
        
                    <span className="flex flex-row gap-4">
                        <button className="transiton-all duration-500 hover:text-rose-500 cursor-pointer">
                            <FiMoon className="w-4 h-4" />
                        </button>
                        <Link href='https://github.com/Dempserayo?tab=overview&from=2026-03-01&to=2026-03-15' className="transiton-all duration-500 hover:text-rose-500 cursor-pointer">
                            <FiGithub className="w-4 h-4" />
                        </Link>
                        <button className="transiton-all duration-500 hover:text-rose-500 cursor-pointer">
                            <FiSend className="w-4 h-4" />
                        </button>
                    </span>
                </div>
            </section>
        </section>
    )
}