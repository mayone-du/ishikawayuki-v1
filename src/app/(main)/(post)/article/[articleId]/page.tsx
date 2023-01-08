import type { NextPage } from "next";
import { IoMdCalendar } from "react-icons/io";
import { Markdown } from "src/components/Markdown";
import { CONSTANTS } from "src/constant";
import type { ArticleList, EmojiApiResponse } from "src/types";

type Props = { articleId: string };

export const generateStaticParams = async () => {
  const res = await fetch(CONSTANTS.github.ARTICLE_LIST_META_URL);
  const data: ArticleList = await res.json();

  return data.map((item) => ({
    articleId: item.created_at,
  }));
};

const getArticle = async (articleId: Props["articleId"]) => {
  const year = articleId.slice(0, 4);
  const res = await fetch(
    `https://raw.githubusercontent.com/mayone-du/blog-contents/main/articles/${year}/${articleId}.md`
  );

  const data: string = await res.text();
  return data;
};

// @ts-expect-error Server Component
const Page: NextPage<{ params: Props }> = async ({ params: { articleId } }) => {
  const data = await getArticle(articleId);
  const [, meta, content] = data.split("---");
  if (!meta || !content) return null;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [, title, description, emoji] = meta.split("\n").map((str) => {
    const deletable = str.substring(0, str.indexOf(":") + 1);
    return str.replace(`${deletable} `, "");
  });

  const emojiRes = await fetch("http://localhost:3000/api/emoji", {
    body: emoji,
    method: "POST",
  });

  const emojiData: EmojiApiResponse = await emojiRes.json();
  if ("error" in emojiData) return null;

  return (
    <div>
      <div className="pt-8 pb-20 flex flex-col gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emojiData.imagePath}
          className={"w-32 h-32 object-cover block mx-auto drop-shadow-md"}
          alt="emoji"
        />
        <h1 className="font-bold text-3xl text-center">{title}</h1>
        <p className="text-center">{description}</p>
        <p className="text-sm text-center flex items-center gap-2 justify-center">
          <span>
            <IoMdCalendar className="text-gray-400 text-2xl" />
          </span>
          <span>Published</span>
          <b>{articleId}</b>
        </p>
      </div>

      <article className="neumorphism-container-xl bg-neumorphism-bg rounded-xl p-12">
        <Markdown markdownText={content} />
      </article>
    </div>
  );
};

export default Page;
