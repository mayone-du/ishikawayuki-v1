import type { ComponentProps, FC } from "react";
import { SiZenn } from "react-icons/si";

type Props = ComponentProps<typeof SiZenn>;

export const ZennIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <SiZenn className={`text-[#3EA8FF] ${className}`} {...rest} />;
};
