import type { FC } from "react";
import { MdHome } from "react-icons/md";

type Props = {
  className?: string;
};

export const HomeIcon: FC<Props> = ({ className = "" }) => {
  return <MdHome className={`text-stone-400 ${className}`} />;
};
