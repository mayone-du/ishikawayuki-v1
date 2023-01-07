import type { ComponentProps, FC } from "react";
import { SiTwitter } from "react-icons/si";

type Props = ComponentProps<typeof SiTwitter>;

export const TwitterIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <SiTwitter className={`text-[#1DA1F2] ${className}`} {...rest} />;
};
