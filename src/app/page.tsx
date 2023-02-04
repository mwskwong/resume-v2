import dynamic from "next/dynamic";
import { FC } from "react";

import WaveRoaring from "@/components/shared/dividers/WaveRoaring";
import WaveRough from "@/components/shared/dividers/WaveRough";
import WaveSmooth from "@/components/shared/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/shared/dividers/WaveSmoothFlat";

import useSx from "./useSx";

const Hero = dynamic(() => import("@/components/home/Hero"));
// const About = dynamic(() => import("@/components/home/About"));
// const Experience = dynamic(() => import("@/components/home/Experience"));
const Education = dynamic(() => import("@/components/home/Education"));
// const Contact = dynamic(() => import("@/components/home/Contact"));

const Home: FC = () => {
  const sx = useSx();

  return (
    <>
      <Hero />
      <WaveSmooth sx={sx.waveSmooth} />
      {/* <About sx={sx.about} /> */}
      <WaveRough sx={sx.waveRough} />
      {/* <Experience sx={sx.experience} /> */}
      <WaveSmoothFlat sx={sx.waveSmoothFlat} />
      <Education sx={sx.education} />
      <WaveRoaring sx={sx.waveRoaring} />
      {/* <Contact /> */}
    </>
  );
};

export default Home;