import Analysis from "@/components/dashboard/Analysis";
import Banner from "@/components/dashboard/Banner";
import Integrate from "@/components/dashboard/Integrate";

export default function Home() {
  return (
    <main className="px-5">
      <Banner/>
      <Analysis/>
      <Integrate/>
    </main>
  );
}
