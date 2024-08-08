import ApiSolution from "@/components/home/ApiSolution";
import Grid from "@/components/home/Grid";
import GrowthChart from "@/components/home/GrowthChart";
import Hero from "@/components/home/Hero";
import QA from "@/components/home/QA";
import Subscribe from "@/components/home/Subscribe";
import Trustee from "@/components/home/Trustee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 px-2 bg-[#ededed] dark:bg-black">
      
      <Hero/>
      <Trustee/>
      <Grid/>
      <ApiSolution/>
      <GrowthChart/>
      <QA/>
      <Subscribe/>
    </main>
  );
}
