import { GitHubIcon } from "src/components/Icon/GitHubIcon";
import { TwitterIcon } from "src/components/Icon/TwitterIcon";
import { ZennIcon } from "src/components/Icon/ZennIcon";
import { CONSTANTS } from "src/constant";

export const PROFILE_LINKS = [
  {
    label: "Twitter",
    href: CONSTANTS.twitter.PROFILE_URL,
    Icon: TwitterIcon,
  },
  {
    label: "GitHub",
    href: CONSTANTS.github.PROFILE_URL,
    Icon: GitHubIcon,
  },
  {
    label: "Zenn",
    href: CONSTANTS.zenn.PROFILE_URL,
    Icon: ZennIcon,
  },
] as const;
