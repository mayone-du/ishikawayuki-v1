import type { ComponentProps, FC } from "react";
import { MdArticle } from "react-icons/md";

type Props = ComponentProps<typeof MdArticle>;

export const ArticleIcon: FC<Props> = ({ className = "", ...rest }) => {
  return <MdArticle className={`text-orange-400 ${className}`} {...rest} />;
};
