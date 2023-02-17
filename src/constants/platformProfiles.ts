import { PlatformProfile } from "@/types";

export const gitHub: PlatformProfile = {
  platform: {
    id: "gitHub",
    name: "GitHub"
  },
  url: "https://github.com/mwskwong"
};

export const linkedIn: PlatformProfile = {
  platform: {
    id: "linkedIn",
    name: "LinkedIn"
  },
  url: "https://www.linkedin.com/in/mwskwong"
};

export const stackOverflow: PlatformProfile = {
  platform: {
    id: "stackOverflow",
    name: "StackOverflow"
  },
  url: "https://stackoverflow.com/users/10579013/matthew-kwong"
};

const platformProfiles: PlatformProfile[] = [gitHub, linkedIn, stackOverflow];

export default platformProfiles;
