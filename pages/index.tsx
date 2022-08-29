import Head from "components/common/Head";
import NavBar from "components/common/NavBar";
import { NextPage } from "next";
import ScrollToTopFab from "components/common/ScrollToTopFab";
import { Suspense } from "react";
import { TypeBackground } from "@mui/material";
import { UseSx } from "types";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("components/index/Hero"), { suspense: true });
const WaveSmooth = dynamic(() => import("components/common/dividers/WaveSmooth"), { suspense: true });
const About = dynamic(() => import("components/index/About"), { suspense: true });
const WaveRough = dynamic(() => import("components/common/dividers/WaveRough"), { suspense: true });
const Experience = dynamic(() => import("components/index/Experience"), { suspense: true });
const WaveSmooth2 = dynamic(() => import("components/common/dividers/WaveSmooth2"), { suspense: true });
const Education = dynamic(() => import("components/index/Education"), { suspense: true });
const WaveRoaring = dynamic(() => import("components/common/dividers/WaveRoaring"), { suspense: true });
const Contact = dynamic(() => import("components/index/Contact"), { suspense: true });
const FooterDivider = dynamic(() => import("components/common/dividers/Footer"), { suspense: true });
const Footer = dynamic(() => import("components/common/Footer"), { suspense: true });

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
        <Suspense>
          <WaveSmooth sx={sx.waveSmooth} />
          <About sx={sx.about} />
        </Suspense>
        <Suspense>
          <WaveRough sx={sx.waveRough} />
          <Experience sx={sx.experience} />
        </Suspense>
        <Suspense>
          <WaveSmooth2 sx={sx.waveSmooth2} />
          <Education sx={sx.education} />
        </Suspense>
        <Suspense>
          <WaveRoaring sx={sx.waveRoaring} />
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <FooterDivider sx={sx.footerDivider} />
        <Footer sx={sx.footer} />
      </Suspense>
      <ScrollToTopFab />
    </>
  );
};

export default Home;
