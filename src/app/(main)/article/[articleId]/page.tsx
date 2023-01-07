import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { CONSTANTS } from "src/constant";
import type { ArticleList } from "src/types";

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
  const [, , content] = data.split("---");
  if (!content) return null;

  return (
    <div>
      <div className="py-20 flex flex-col gap-8">
        <h1 className="font-bold text-3xl text-center">TODO: Title</h1>
        <p className="text-center">TODO: description</p>
      </div>

      <div className="flex gap-10 items-start">
        <article className="basis-2/3 neumorphism-container-xl bg-neumorphism-bg rounded-xl p-4">
          <div className="prose prose-headings:text-main-text prose-p:text-main-text prose-li:text-main-text">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
        <aside className="basis-1/3 neumorphism-container-md bg-neumorphism-bg">
          <div className="p-4">
            <p className="font-bold text-xl">Ishikawa Yuki</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Page;
