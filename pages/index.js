import Image from "next/image";
import { Inter } from "next/font/google";
import Intro from "@/components/intro/Intro";
import CreaPartner from "@/components/creativePartner/CreaPartner";
import WebDesign from "@/components/ourServices/WebDesign";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Intro />
      <CreaPartner />
      {/* <WebServices/> */}
      <WebDesign />
    </div>
  );
}
