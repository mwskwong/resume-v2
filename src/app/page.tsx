"use client";

import { FC } from "react";

import WaveSmooth from "@/components/dividers/WaveSmooth";

import Hero from "./components/Hero";
import useStyles from "./useStyles";

const Home: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Hero />
      <WaveSmooth className={classes.waveSmooth} />
    </>
  );
};

export default Home;