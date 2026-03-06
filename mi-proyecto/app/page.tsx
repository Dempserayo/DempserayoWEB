import Banner from "./components/common/banner";
import ViewComponents from "./components/common/viewComponents";
import Footer from "./components/constants/footer";
import Navbar from "./components/constants/navbar";

export default function Home() {
  return (
  <div className="w-full h-auto bg-slate-50 backdrop-blur-2xl flex flex-col items-center gap-4">
    <Navbar/>
    
    <section className="w-full h-auto flex flex-col  justify-center items-center">
      <Banner/>
      <ViewComponents/>
    </section>
    
    <Footer/>
    
  </div>
  );
}
