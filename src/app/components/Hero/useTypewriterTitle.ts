import { useMediaQuery } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import TypeIt from "typeit";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";

const useTypewriterTitle = () => {
  const ref = useRef();
  const motion = useMediaQuery("(prefers-reduced-motion: no-preference)");
  const strings = useMemo(() => [
    ...jobTitles.map(jobTitle => `A ${jobTitle}.`),
    `${firstName} ${lastName}.`
  ], []);

  useEffect(() => {
    if (motion) {
      const delays = {
        beforeTyping: 375,
        afterTyping: 1500
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const typeIt = new (TypeIt as any)(ref.current, {
        startDelay: delays.afterTyping,
        startDelete: true,
        breakLines: false,
        loop: true,
        nextStringDelay: 0,
        loopDelay: 0
      })
        .delete(null, { delay: delays.beforeTyping });

      for (let i = 0; i < strings.length; i++) {
        typeIt.type(strings[i], { delay: delays.afterTyping });
        if (i !== strings.length - 1) {
          typeIt.delete(null, { delay: delays.beforeTyping });
        }
      }

      typeIt.go();

      return () => typeIt.destroy();
    }
  }, [motion, strings]);

  return { ref, strings };
};

export default useTypewriterTitle;