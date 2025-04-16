"use client"

import style from "./page.module.css";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import BrandIcons from "@/components/BrandIcons/BrandIcons";
import WebTechnology from "@/components/WebTechnology/WebTechnology";
import Tabview from "@/components/TabView/Tabview";
import OurPortfolio from "@/components/Portfolio/OurPortfolio";
import OurClients from "@/components/OurClients/OurClients";
import About from "@/components/About/About";
import Corevalues from "@/components/CoreValues/Corevalues";
import Banner2 from "@/components/Banner2/Banner2";
import Testimonial from "@/components/Testimonial/Testimonial";
import Contact from "@/components/Contact/Contact";
import Ceo from "@/components/CEO/Ceo";
import Roadmap from "@/components/Roadmap/Roadmap";
import { homeRoad } from "./homeRoadmap";
// import ParticleRing from "@/components/Header3d/ParticleRing";

const ParticleRing = dynamic(()=> import('../components/Header3d/ParticleRing'), {
  ssr: true,
})

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <ParticleRing />
      <section className={style.middle}>
        <div className="container">
          <Banner />
          <BrandIcons />
          <WebTechnology />
          <Tabview />
        </div>
      </section>
      <section className={style.projects}>
        <div className="container">
          <OurPortfolio limit={6} />
          <OurClients />
        </div>
      </section>
      <section>
        <div className="container">
          <About />
        </div>
      </section>
      <section className={style.corevalue}>
        <div className="container">
          <Corevalues />
          <Banner2 />
        </div>
      </section>
      <section>
        <div className="container">
          <Roadmap data={homeRoad}/>
          <Testimonial />
          <Contact />
          <Ceo />
        </div>
      </section>
    </>
  );
}
