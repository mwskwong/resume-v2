import { Button, Container, Typography } from "@mui/material";

import { KeyboardArrowLeftRounded as ArrowLeft } from "@mui/icons-material";
import Head from "components/common/Head";
import Link from "next/link";
import { NextPage } from "next";
import asSxRecord from "utils/asSxRecord";

const useSx = () => asSxRecord({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    py: 4
  },
  404: {
    color: "primary.main",
    fontSize: "5rem"
  },
  notFound: {
    typography: "h5",
    my: 4,
    textAlign: "center"
  }
});

const NotFound: NextPage = () => {
  const sx = useSx();

  return (
    <>
      <Head title="Not Found" />
      <Container component="main" sx={sx.root}>
        <Typography variant="h1" sx={sx["404"]}>
          404
        </Typography>
        <Typography component="h1" sx={sx.notFound}>
          The page you were looking for does not exist.
        </Typography>
        <Button variant="contained" size="large" startIcon={<ArrowLeft />} component={Link} href="/">
          back to home
        </Button>
      </Container>
    </>
  );
};

export default NotFound;