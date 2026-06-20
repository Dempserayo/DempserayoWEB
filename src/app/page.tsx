import Banner from "./components/common/banner";
import Navbar from "./components/constants/navbar";

export default function Home() {
  return (
  <main className="w-full h-screen bg-linear-to-b from-slate-100 via-white to-slate-200  backdrop-blur-2xl flex flex-col items-center">
    <Navbar/>
    <Banner/>
  </main>
  );
}
