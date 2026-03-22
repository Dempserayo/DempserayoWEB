import Banner from "./components/common/banner";
import ViewComponents from "./components/common/viewComponents";
import ViewDownload from "./components/common/viewDownload";

export default function Home() {
  return (
  <main className="w-full h-auto text-slate-800 backdrop-blur-2xl flex flex-col items-center gap-4">
    <Banner/>
    <ViewComponents/>
    <ViewDownload/>
  </main>
  );
}
