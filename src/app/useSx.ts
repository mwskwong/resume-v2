import { SxProps, Theme } from "@mui/material";

const useSx = () => {
  const bgColors = {
    hero: "background.default",
    about: "background.sectionPrimary",
    experience: "background.sectionSecondary",
    education: "background.sectionPrimary",
    contact: "background.default",
    footer: "background.sectionPrimary"
  };

  const waveSmooth: SxProps<Theme> = {
    bgcolor: bgColors.hero,
    color: bgColors.about
  };

  const about: SxProps<Theme> = {
    bgcolor: bgColors.about
  };

  const waveRough: SxProps<Theme> = {
    bgcolor: bgColors.about,
    color: bgColors.experience
  };

  const experience: SxProps<Theme> = {
    bgcolor: bgColors.experience
  };

  const waveSmoothFlat: SxProps<Theme> = {
    bgcolor: bgColors.experience,
    color: bgColors.education
  };

  const education: SxProps<Theme> = {
    bgcolor: bgColors.education
  };

  const waveRoaring: SxProps<Theme> = {
    bgcolor: bgColors.education,
    color: bgColors.contact
  };

  const footerDivider: SxProps<Theme> = {
    bgcolor: bgColors.contact,
    color: bgColors.footer
  };

  const footer: SxProps<Theme> = {
    bgcolor: bgColors.footer
  };

  return {
    waveSmooth,
    about,
    waveRough,
    experience,
    waveSmoothFlat,
    education,
    waveRoaring,
    footerDivider,
    footer
  };
};

export default useSx;