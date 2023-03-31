import SectionProps from "@/components/shared/Section/SectionProps";

interface SectionDividerProps {
  sectionVariants: {
    previous?: SectionProps["variant"];
    next?: SectionProps["variant"];
  };
}

export default SectionDividerProps;
