import type { FC } from "react";
import { SiGithub } from "react-icons/si";

type Props = {
  className?: string;
};

export const GitHubIcon: FC<Props> = ({ className = "" }) => {
  return <SiGithub className={`${className} text-[#171515]`} />;
};
