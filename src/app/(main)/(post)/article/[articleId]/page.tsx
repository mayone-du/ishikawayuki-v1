import { IoMdCalendar } from "react-icons/io";
import { Markdown } from "src/components/Markdown";
import { CONSTANTS } from "src/constant";
import type { ArticleList, EmojiDataSource } from "src/types";

type Props = {
  params: { articleId: string };
};

const getCodePoint = (emoji: string) => {
  return emoji.codePointAt(0)?.toString(16).toUpperCase();
};

const getEmojiFilePath = async (emoji: string) => {
  const codePoint = getCodePoint(emoji);
  const emojiRes = await fetch(CONSTANTS.emoji.DATA_SOURCE);
  const data: EmojiDataSource = await emojiRes.json();
  const hit = data.find((item) => item.unified === codePoint);
  if (!hit) return;
  const lowerSnakeCase = hit.name.toLowerCase().replaceAll(" ", "_");
  return `/assets/${lowerSnakeCase}.png`;
};

export const generateStaticParams = async () => {
  const res = await fetch(CONSTANTS.github.ARTICLE_LIST_META_URL);
  const data: ArticleList = await res.json();

  return data.map((item) => ({
    articleId: item.created_at,
  }));
};

const getArticle = async (articleId: Props["params"]["articleId"]) => {
  const year = articleId.slice(0, 4);
  const res = await fetch(
    `https://raw.githubusercontent.com/mayone-du/blog-contents/main/articles/${year}/${articleId}.md`
  );

  const data: string = await res.text();
  return data;
};

// @see https://github.com/vercel/next.js/issues/41884
// @ts-expect-error Server Component
const Page: FC<Props> = async ({ params: { articleId } }) => {
  const data = await getArticle(articleId);
  const [, meta, content] = data.split("---");
  if (!meta || !content) return null;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [, title, description, emoji] = meta.split("\n").map((str) => {
    const deletable = str.substring(0, str.indexOf(":") + 1);
    return str.replace(`${deletable} `, "");
  });

  if (!emoji) return null;
  const emojiPath = await getEmojiFilePath(emoji);

  return (
    <div>
      <div className="sm:pt-8 sm:pb-20 pt-4 pb-8 flex flex-col sm:gap-6 gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emojiPath}
          className={
            "sm:h-32 h-24 aspect-square object-cover block mx-auto drop-shadow-md"
          }
          alt="emoji"
        />
        <h1 className="font-bold sm:text-3xl text-2xl text-center sm:px-8 px-4">
          {title}
        </h1>
        <p className="text-center sm:px-8 px-6">{description}</p>
        <p className="text-sm text-center flex items-center gap-2 justify-center">
          <span>
            <IoMdCalendar className="text-gray-400 text-2xl" />
          </span>
          <b>{articleId}</b>
          <span>Published</span>
        </p>
      </div>

      <article className="neumorphism-container-xl bg-neumorphism-bg rounded-xl sm:p-12 p-6">
        <Markdown markdownText={content} />
      </article>
    </div>
  );
};

export default Page;
