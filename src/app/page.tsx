"use client";

import { FC } from "react";

import WaveSmooth from "@/components/dividers/WaveSmooth";

import Hero from "./components/Hero";
import useSx from "./useSx";

const Home: FC = () => {
  const sx = useSx();

  return (
    <>
      <Hero />
      <WaveSmooth sx={sx.waveSmooth} />
    </>
  );
};

export default Home;