import type { ComponentProps, FC } from "react";
import { MdHome } from "react-icons/md";

type Props = ComponentProps<typeof MdHome>;

export const HomeIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <MdHome className={`text-stone-400 ${className}`} {...rest} />;
};
