import Link from "next/link";

export default function Footer() {
    return(
        <footer className="w-full h-full py-20 text-xs ">
            <section className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Perfil */}
                <div className="flex items-center gap-4">
                    <Link
                    href="https://github.com/Dempserayo"
                    className="w-10 h-10 border border-slate-200/30 bg-linear-to-br from-slate-800 via-slate-500 to-slate-400  text-white flex items-center justify-center transition-all duration-300"
                    >
                    MA
                    </Link>

                    <div>
                    <p className="text-sm">Miguel Angel J P</p>
                    <p className="text-xs text-slate-500">
                        Dempserayo · Creator & Maintainer
                    </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="hidden lg:flex gap-10">

                    <div>
                    <p>+0 / 150</p>
                    <p className="text-slate-500">Components</p>
                    </div>

                    <div>
                    <p className="text-rose-500">98% / 100%</p>
                    <p className="text-rose-500/50">Accessibility</p>
                    </div>

                    <div>
                    <p>1 / 1</p>
                    <p className="text-slate-500">Development Team</p>
                    </div>

                </div>

                {/* Links */}
                <div className="hidden md:flex gap-8">

                    <div>
                    <Link
                        href="https://www.npmjs.com/package/dempserayo-ui"
                        className="hover:text-rose-500 transition"
                    >
                        0.0.4
                    </Link>
                    <p className="text-slate-500">Version</p>
                    </div>

                    <div>
                    <Link
                        href="https://www.npmjs.com/package/dempserayo-ui"
                        className="hover:text-rose-500 transition"
                    >
                        Documentation
                    </Link>
                    <p className="text-slate-500">Docs</p>
                    </div>

                </div>
            </section>
        </footer>
    )
}