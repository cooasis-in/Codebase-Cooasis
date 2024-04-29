import Banner from "@/components/banner";
import EcosystemDesign from "@/components/ecosystem-design";
import PluginCard from "@/components/plugin-card";
import PreviousWork from "@/components/previous-work";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
      <Banner/>
      <EcosystemDesign/>
      <PluginCard/>
      <PreviousWork/>
      </>
  );
}
