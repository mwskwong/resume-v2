import nav, { HOME } from "constants/nav";
import { useEffect, useState, useTransition } from "react";

import { SectionId } from "types";

const isSectionId = (value: string): value is SectionId => {
  const sectionIds = Object.values(nav).map(({ id }) => id as string);
  return sectionIds.includes(value);
};

const useActiveSectionId = (): SectionId => {
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState(HOME.id);

  useEffect(() => {
    const initId = window.location.hash?.slice(1);

    if (isSectionId(initId)) setActiveSectionId(initId);

    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrollBottom) {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;