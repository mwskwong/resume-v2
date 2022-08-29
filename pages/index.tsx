import About from "components/index/About";
import Education from "components/index/Education";
import Experience from "components/index/Experience";
import Footer from "components/common/Footer";
import FooterDivider from "components/common/dividers/Footer";
import Head from "components/common/Head";
import Hero from "components/index/Hero";
import NavBar from "components/common/NavBar";
import { NextPage } from "next";
import ScrollToTopFab from "components/common/ScrollToTopFab";
import { Suspense } from "react";
import { TypeBackground } from "@mui/material";
import { UseSx } from "types";
import WaveRoaring from "components/common/dividers/WaveRoaring";
import WaveRough from "components/common/dividers/WaveRough";
import WaveSmooth from "components/common/dividers/WaveSmooth";
import WaveSmooth2 from "components/common/dividers/WaveSmooth2";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("components/index/Contact"), { suspense: true });

const bgcolors: Record<string, keyof TypeBackground> = {
  hero: "default",
  about: "sectionPrimary",
  experience: "sectionSecondary",
  education: "sectionPrimary",
  contact: "default",
  footer: "sectionPrimary"
};

const useSx: UseSx = () => ({
  waveSmooth: {
    color: `background.${bgcolors.about}`
  },
  about: {
    bgcolor: `background.${bgcolors.about}`
  },
  waveRough: {
    bgcolor: `background.${bgcolors.about}`,
    color: `background.${bgcolors.experience}`
  },
  experience: {
    bgcolor: `background.${bgcolors.experience}`
  },
  waveSmooth2: {
    bgcolor: `background.${bgcolors.experience}`,
    color: `background.${bgcolors.education}`
  },
  education: {
    bgcolor: `background.${bgcolors.education}`
  },
  waveRoaring: {
    bgcolor: `background.${bgcolors.education}`,
    color: `background.${bgcolors.contact}`
  },
  footerDivider: {
    bgcolor: `background.${bgcolors.contact}`,
    color: `background.${bgcolors.footer}`
  },
  footer: {
    bgcolor: `background.${bgcolors.footer}`
  }
});

const Home: NextPage = () => {
  const sx = useSx();

  return (
    <>
      <Head />
      <NavBar />
      <main>
        <Hero />
        <WaveSmooth sx={sx.waveSmooth} />
        <About sx={sx.about} />
        <WaveRough sx={sx.waveRough} />
        <Experience sx={sx.experience} />
        <WaveSmooth2 sx={sx.waveSmooth2} />
        <Education sx={sx.education} />
        <WaveRoaring sx={sx.waveRoaring} />
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <FooterDivider sx={sx.footerDivider} />
      <Footer sx={sx.footer} />
      <ScrollToTopFab />
    </>
  );
};

export default Home;
