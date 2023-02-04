import { PlatformProfile } from "@/types";

export const gitHub: PlatformProfile = {
  id: "gitHub",
  name: "GitHub",
  url: "https://github.com/mwskwong"
};

export const linkedIn: PlatformProfile = {
  id: "linkedIn",
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/mwskwong"
};

export const stackOverflow: PlatformProfile = {
  id: "stackOverflow",
  name: "StackOverflow",
  url: "https://stackoverflow.com/users/10579013/matthew-kwong"
};

const platformProfiles: PlatformProfile[] = [gitHub, linkedIn, stackOverflow];

export default platformProfiles;