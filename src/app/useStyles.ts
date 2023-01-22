import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(
  theme => {
    const bgColors = theme.vars.palette.background;
    const colors = {
      hero: bgColors.default,
      about: bgColors.sectionPrimary,
      experience: bgColors.sectionSecondary,
      education: bgColors.sectionPrimary,
      contact: bgColors.default,
      footer: bgColors.sectionPrimary
    };

    return {
      waveSmooth: {
        color: colors.about
      },
      about: {
        backgroundColor: colors.about
      },
      waveRough: {
        backgroundColor: colors.about,
        color: colors.experience
      },
      experience: {
        backgroundColor: colors.experience
      },
      waveSmoothFlat: {
        backgroundColor: colors.experience,
        color: colors.education
      },
      education: {
        backgroundColor: colors.education
      },
      waveRoaring: {
        backgroundColor: colors.education,
        color: colors.contact
      },
      footerDivider: {
        backgroundColor: colors.contact,
        color: colors.footer
      },
      footer: {
        backgroundColor: colors.footer
      }
    };
  }
);

export default useStyles;