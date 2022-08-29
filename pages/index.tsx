import Footer from "components/common/Footer";
import FooterDivider from "components/common/dividers/Footer";
import Head from "components/common/Head";
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

const Hero = dynamic(() => import("components/index/Hero"), { suspense: true });
const About = dynamic(() => import("components/index/About"), { suspense: true });
const Experience = dynamic(() => import("components/index/Experience"), { suspense: true });
const Education = dynamic(() => import("components/index/Education"), { suspense: true });
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
        <Suspense>
          <Hero />
        </Suspense>
        <WaveSmooth sx={sx.waveSmooth} />
        <Suspense>
          <About sx={sx.about} />
        </Suspense>
        <WaveRough sx={sx.waveRough} />
        <Suspense>
          <Experience sx={sx.experience} />
        </Suspense>
        <WaveSmooth2 sx={sx.waveSmooth2} />
        <Suspense>
          <Education sx={sx.education} />
        </Suspense>
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
