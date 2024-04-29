import Banner from "@/components/banner";
import EcosystemDesign from "@/components/ecosystem-design";
import PluginCard from "@/components/plugin-card";
import PreviousWork from "@/components/previous-work";
import { Inter } from "next/font/google";
import Intro from "@/components/intro/Intro";
import CreaPartner from "@/components/creativePartner/CreaPartner";
import WebDesign from "@/components/ourServices/WebDesign";
import Dashboard from "@/components/dashboard/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
      <div>
      <Intro />
      <CreaPartner />
      {/* <WebServices/> */}
      <WebDesign />
      <Dashboard/>
    </div>
      <Banner/>
      <EcosystemDesign/>
      <PluginCard/>
      <PreviousWork/>
      </>
  );
}
