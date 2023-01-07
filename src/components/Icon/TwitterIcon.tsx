import type { FC } from "react";
import { SiTwitter } from "react-icons/si";

type Props = {
  className?: string;
};

const LOGO_COLOR = "#1DA1F2";

export const TwitterIcon: FC<Props> = ({ className = "" }) => {
  return <SiTwitter className={`${className} text-[${LOGO_COLOR}]`} />;
};
