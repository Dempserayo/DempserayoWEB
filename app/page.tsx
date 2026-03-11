import Banner from "./components/common/banner";
import ViewComponents from "./components/common/viewComponents";
import ViewDownload from "./components/common/viewDownload";
import Footer from "./components/constants/footer";
import Navbar from "./components/constants/navbar";

export default function Home() {
  return (
  <main className="w-full h-auto bg-slate-50/50 text-slate-800 backdrop-blur-2xl flex flex-col items-center gap-4">
    <Navbar/>
    <Banner/>
    <ViewComponents/>
    <ViewDownload/>
    <Footer/>
  </main>
  );
}
