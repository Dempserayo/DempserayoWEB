import Link from "next/link";

export default function Banner() {
    return (
      <div className="w-full font-thin">
        <section className="w-full h-80 bg-linear-to-br from-slate-800 via-slate-500 to-slate-500 flex justify-center items-center py-10">
          <div className="w-full max-w-7xl h-full flex justify-end items-end">
            <span className="text-white text-xs tracking-widest font-thin">v0.0.2</span>
          </div>
        </section>
  
        <section className="w-full flex justify-center items-center p-20 text-slate-500 font-thin text-xs">
            <div className="w-full max-w-7xl flex flex-row gap-4">
              <>
                <section className="w-auto flex items-center gap-4">
                  <Link href='/' className="w-10 h-10 rounded-full bg-slate-500 hover:bg-slate-400 transition-all duration-500 text-white flex items-center justify-center">
                      <span className="uppercase">ma</span>
                  </Link>

                  <div>
                    <p className="text-xs font-thin">Miguel Angel J P</p>
                    <p className="text-slate-500/50 text-xs font-thin">Dempserayo · Creator & Maintainer</p>
                  </div>
                </section>
              </>
            </div>
        </section>
      </div>
    );
  }