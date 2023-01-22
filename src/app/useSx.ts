
import makeSx from "@/utils/makeSx";

const bgColors = {
  hero: "background.default",
  about: "background.sectionPrimary",
  experience: "background.sectionSecondary",
  education: "background.sectionPrimary",
  contact: "background.default",
  footer: "background.sectionPrimary"
};

const useSx = () => makeSx({
  waveSmooth: {
    bgcolor: bgColors.hero,
    color: bgColors.about
  },
  about: {
    bgcolor: bgColors.about
  },
  waveRough: {
    bgcolor: bgColors.about,
    color: bgColors.experience
  },
  experience: {
    bgcolor: bgColors.experience
  },
  waveSmoothFlat: {
    bgcolor: bgColors.experience,
    color: bgColors.education
  },
  education: {
    bgcolor: bgColors.education
  },
  waveRoaring: {
    bgcolor: bgColors.education,
    color: bgColors.contact
  },
  footerDivider: {
    bgcolor: bgColors.contact,
    color: bgColors.footer
  },
  footer: {
    bgcolor: bgColors.footer
  }
});


export default useSx;