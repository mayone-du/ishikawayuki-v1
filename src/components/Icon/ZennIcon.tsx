import type { FC } from "react";
import { SiZenn } from "react-icons/si";

type Props = {
  className?: string;
};

export const ZennIcon: FC<Props> = ({ className = "" }) => {
  return <SiZenn className={`text-[#3EA8FF] ${className}`} />;
};
