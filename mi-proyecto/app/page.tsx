import Navbar from "./components/constants/navbar";

export default function Home() {
  return (
  <div className="w-full h-auto bg-neutral-50 backdrop-blur-2xl flex flex-col items-center gap-4">
    <Navbar/>
    <section className="w-full h-auto flex flex-col  justify-center items-center">
      <div className="w-full h-80 bg-slate-800"></div>
      <div className="w-full h-screen bg-slate-200"></div>
    </section>
    <div className="w-full h-80 "></div>
  </div>
  );
}
