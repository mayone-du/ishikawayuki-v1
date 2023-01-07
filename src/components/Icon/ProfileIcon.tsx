import type { FC } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

type Props = {
  className?: string;
};

export const ProfileIcon: FC<Props> = ({ className = "" }) => {
  return <RiAccountCircleFill className={`text-sky-400 ${className}`} />;
};
