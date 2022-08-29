import { SectionId } from "types";

type Section = {
  id: SectionId,
  name: string
}

export const HOME: Section = { id: "home", name: "Home" };
export const ABOUT: Section = { id: "about", name: "About" };
export const EXPERIENCE: Section = { id: "experience", name: "Experience" };
export const EDUCATION: Section = { id: "education", name: "Education" };
export const CONTACT: Section = { id: "contact", name: "Contact" };

const nav = {
  HOME,
  ABOUT,
  EXPERIENCE,
  EDUCATION,
  CONTACT
};

export default nav;