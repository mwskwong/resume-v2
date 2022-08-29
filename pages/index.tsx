import About from "components/index/About";
import Head from "components/common/Head";
import Hero from "components/index/Hero";
import NavBar from "components/common/NavBar";
import { NextPage } from "next";
import ScrollToTopFab from "components/common/ScrollToTopFab";
import { TypeBackground } from "@mui/material";
import { UseSx } from "types";
import WaveSmooth from "components/common/dividers/WaveSmooth";

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
      </main>
      <ScrollToTopFab />
    </>
  );
};

export default Home;
