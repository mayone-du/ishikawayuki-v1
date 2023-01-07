import type { FC } from "react";
import { SiZenn } from "react-icons/si";

type Props = {
  className?: string;
};

const LOGO_COLOR = "#3EA8FF";

export const ZennIcon: FC<Props> = ({ className = "" }) => {
  return <SiZenn className={`${className} text-[${LOGO_COLOR}]`} />;
};
