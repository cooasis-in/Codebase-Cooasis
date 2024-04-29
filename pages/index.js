import Banner from "@/components/banner";
import EcosystemDesign from "@/components/ecosystem-design";
import PluginCard from "@/components/plugin-card";
import PreviousWork from "@/components/previous-work";
import { Inter } from "next/font/google";
import Intro from "@/components/intro/Intro";
import CreaPartner from "@/components/creativePartner/CreaPartner";
import WebDesign from "@/components/ourServices/WebDesign";
import Dashboard from "@/components/dashboard/Dashboard";
import OurCommunity from "@/components/our-Community/OurCommunity";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        {/* <Intro /> */}
        <Banner />
        <CreaPartner />
        {/* <WebServices/> */}
        <WebDesign />
        <Dashboard />
      </div>

      <EcosystemDesign />
      <OurCommunity/>
      <PluginCard />
      <PreviousWork />
    </>
  );
}
