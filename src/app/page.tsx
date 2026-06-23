import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
  <main className="w-full h-full 2xl:h-screen bg-linear-to-b from-slate-100 via-white to-slate-200  backdrop-blur-2xl flex flex-col items-center">
    <Navbar/>
    <Banner/>
    <Footer/>
  </main>
  );
}
