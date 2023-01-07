import type { ComponentProps, FC } from "react";
import { SiGithub } from "react-icons/si";

type Props = ComponentProps<typeof SiGithub>;

export const GitHubIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <SiGithub className={`text-[#171515] ${className}`} {...rest} />;
};
