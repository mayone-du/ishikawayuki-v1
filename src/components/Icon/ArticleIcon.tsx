import type { FC } from "react";
import { MdArticle } from "react-icons/md";

type Props = {
  className?: string;
};

export const ArticleIcon: FC<Props> = ({ className = "" }) => {
  return <MdArticle className={`text-orange-400 ${className}`} />;
};
