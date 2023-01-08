import type { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  markdownText: string;
};

export const Markdown: FC<Props> = ({ markdownText }) => {
  return (
    <div className="prose sm:prose-h1:text-3xl prose-h1:text-2xl prose-headings:text-gray-500 prose-headings:border-b-2 prose-headings:pb-2 prose-headings:border-gray-200 prose-p:text-gray-500 prose-li:text-gray-500 max-w-5xl mx-auto">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};
