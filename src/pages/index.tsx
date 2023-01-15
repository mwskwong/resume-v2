import FooterDivider from "components/common/dividers/Footer";
import WaveRoaring from "components/common/dividers/WaveRoaring";
import WaveRough from "components/common/dividers/WaveRough";
import WaveSmooth from "components/common/dividers/WaveSmooth";
import WaveSmoothFlat from "components/common/dividers/WaveSmoothFlat";
import Footer from "components/common/Footer";
import Head from "components/common/Head";
import NavBar from "components/common/NavBar";
import ScrollToTopFab from "components/common/ScrollToTopFab";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import asSxRecord from "utils/asSxRecord";

const Hero = dynamic(() => import("components/index/Hero"));
const About = dynamic(() => import("components/index/About"));
const Experience = dynamic(() => import("components/index/Experience"));
const Education = dynamic(() => import("components/index/Education"));
const Contact = dynamic(() => import("components/index/Contact"));

const bgcolors = {
  hero: "default",
  about: "sectionPrimary",
  experience: "sectionSecondary",
  education: "sectionPrimary",
  contact: "default",
  footer: "sectionPrimary"
};

const useSx = () => asSxRecord({
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
  waveSmoothFlat: {
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
        <WaveSmoothFlat sx={sx.waveSmoothFlat} />
        <Education sx={sx.education} />
        <WaveRoaring sx={sx.waveRoaring} />
        <Contact />
      </main>
      <FooterDivider sx={sx.footerDivider} />
      <Footer sx={sx.footer} />
      <ScrollToTopFab />
    </>
  );
};

export default Home;
