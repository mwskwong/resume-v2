import SectionProps from "@/components/shared/section/section-props";

interface SectionDividerProps {
  sectionVariants: {
    previous?: SectionProps["variant"];
    next?: SectionProps["variant"];
  };
}

export default SectionDividerProps;
