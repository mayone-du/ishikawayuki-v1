import type { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  markdownText: string;
};

export const Markdown: FC<Props> = ({ markdownText }) => {
  return (
    <div className="prose sm:prose-h1:text-3xl prose-h1:text-2xl prose-headings:text-gray-500 prose-headings:relative prose-headings:before:block prose-headings:before:h-1 prose-headings:before:w-full prose-headings:before:bg-neumorphism-active-bg prose-headings:before:absolute prose-headings:before:-bottom-2 prose-headings:before:rounded-md prose-headings:before:shadow-[inset_-1px_-1px_1px_rgba(255,_255,_255,_0.7),_inset_1px_1px_2px_rgba(174,_174,_192,_0.2)] prose-headings:pb-2 prose-headings:border-gray-200 prose-p:text-gray-500 prose-li:text-gray-500 max-w-5xl mx-auto">
      <ReactMarkdown
        components={{
          p: (props) => {
            // 子要素がimgだったら、子要素をdivで囲む
            const type = (props.children[0] as any).type;
            if (typeof type === "function") {
              return (
                <div className="grid my-4 md:grid-cols-4 grid-cols-2 gap-4">
                  {props.children}
                </div>
              );
            }
            return <p {...props} />;
          },
          img: (props) => {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt={""}
                loading="lazy"
                {...props}
                className="grid-cols-1 object-cover rounded-md m-0"
              />
            );
          },
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};
