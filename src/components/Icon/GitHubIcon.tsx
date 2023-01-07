import type { FC } from "react";
import { SiGithub } from "react-icons/si";

type Props = {
  className?: string;
};

const LOGO_COLOR = "#171515";

export const GitHubIcon: FC<Props> = ({ className = "" }) => {
  return <SiGithub className={`${className} text-[${LOGO_COLOR}]`} />;
};
