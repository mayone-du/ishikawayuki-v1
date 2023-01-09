import type { ComponentProps, FC } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

type Props = ComponentProps<typeof RiAccountCircleFill>;

export const ProfileIcon: FC<Props> = ({ className = "", ...rest }) => {
  return (
    <RiAccountCircleFill className={`text-[#7193c9] ${className}`} {...rest} />
  );
};
