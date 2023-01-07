import type { ComponentProps, FC } from "react";
import { RiBook2Fill } from "react-icons/ri";

type Props = ComponentProps<typeof RiBook2Fill>;

export const DiaryIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <RiBook2Fill className={`text-emerald-400 ${className}`} {...rest} />;
};
