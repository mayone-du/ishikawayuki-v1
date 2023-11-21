import type { Metadata } from "next";
import { IoMdCalendar } from "react-icons/io";
import { Markdown } from "src/components/Markdown";
import { CONSTANTS } from "src/constant";
import type { ArticleList } from "src/types";

type Props = {
  params: { diaryId: string };
};

export const generateStaticParams = async () => {
  const res = await fetch(CONSTANTS.github.ARTICLE_LIST_META_URL, {
    next: { revalidate: 60 * 5 }, // 5 minutes
  });
  const data: ArticleList = await res.json();

  return data.map((item) => ({
    diaryId: item.created_at,
  }));
};

const getArticle = async (diaryId: Props["params"]["diaryId"]) => {
  const year = diaryId.slice(0, 4);
  const res = await fetch(
    `https://raw.githubusercontent.com/mayone-du/blog-contents/main/articles/${year}/${diaryId}.md`
  );

  const data: string = await res.text();
  return data;
};

export const generateMetadata = async ({
  params: { diaryId },
}: Props): Promise<Metadata> => {
  const article = await getArticle(diaryId);
  const { description, emojiImage, title } = getArticleMetadata(article);
  const emojiPath = `${CONSTANTS.github.IMAGE_BASE_URL}/emoji/${emojiImage}`;
  return {
    title: title,
    description: description,
    icons: [emojiPath],
  };
};

const getArticleMetadata = (article: string) => {
  const [, meta, content] = article.split("---");
  if (!meta) throw new Error("meta is not found");
  const [, title, description, emoji, emojiImage] = meta
    .split("\n")
    .map((str) => {
      const deletable = str.substring(0, str.indexOf(":") + 1);
      return str.replace(`${deletable} `, "");
    });

  return {
    title,
    description,
    emojiImage,
    content,
    emoji,
  };
};

const Page = async ({ params: { diaryId } }: Props) => {
  const data = await getArticle(diaryId);
  const { content, description, emojiImage, title } = getArticleMetadata(data);
  if (!content) return null;

  const emojiPath = `${CONSTANTS.github.IMAGE_BASE_URL}/emoji/${emojiImage}`;

  return (
    <div>
      <div className="pt-4 sm:pb-16 pb-8 flex flex-col sm:gap-6 gap-4">
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
          <span className="font-medium">{diaryId}</span>
          <span>Published</span>
        </p>
      </div>

      <article className="neumorphism-container-xl bg-neumorphism-bg rounded-xl sm:p-12 p-6">
        <Markdown markdownText={content} />
      </article>

      {/* TODO: reaction */}
      {/* TODO: prev/next contents */}
    </div>
  );
};

export default Page;
