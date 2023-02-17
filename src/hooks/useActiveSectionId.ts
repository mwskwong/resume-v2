import { throttle } from "lodash-es";
import { useEffect, useState, useTransition } from "react";

import nav, { HOME } from "@/constants/nav";
import { SectionId } from "@/types";

const useActiveSectionId = (): SectionId => {
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState(HOME.id);

  useEffect(() => {
    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = throttle(() => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom) {
        startTransition(() => setActiveSectionId(sectionIds[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          const sectionActive = section
            && section.offsetTop < document.documentElement.scrollTop
            + document.documentElement.clientHeight / 8;

          if (sectionActive) {
            startTransition(() => setActiveSectionId(sectionId));
            break;
          }
        }
      }
    }, 1000 / 6); // 6 fps

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;
