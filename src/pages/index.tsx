import Counters from "@/components/homeComponents/Counters";
import Feelings from "@/components/homeComponents/Feelings";
import GetInTouch from "@/components/homeComponents/GetInTouch";
import HeroSection from "@/components/homeComponents/HeroSection";
import IndustryLeaders from "@/components/homeComponents/IndustryLeaders";
import LatestProjects from "@/components/homeComponents/LatestProjects";
import Reason from "@/components/homeComponents/Reason";
import Target from "@/components/homeComponents/Target";
import VisitMarket from "@/components/homeComponents/VisitMarket";
import VisitSection from "@/components/homeComponents/VisitSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Orion Ux labs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-0 m-0 bg-color-white">
          <HeroSection />
          <Counters />
          <Feelings />
          <Reason />
          <LatestProjects />
          <Target />
          <IndustryLeaders />
          <VisitMarket />
          <VisitSection />
          <GetInTouch />
        </div>
      </main>
    </>
  );
}
