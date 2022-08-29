import { GetStaticProps, NextPage } from "next";

import { Head } from "components/index";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Typography variant="h1">This is H1.</Typography>
    </>
  );
};

export default Home;
