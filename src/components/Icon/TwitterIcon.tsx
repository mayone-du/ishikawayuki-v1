import type { FC } from "react";
import { SiTwitter } from "react-icons/si";

type Props = {
  className?: string;
};

export const TwitterIcon: FC<Props> = ({ className = "" }) => {
  return <SiTwitter className={`${className} text-[#1DA1F2]`} />;
};
