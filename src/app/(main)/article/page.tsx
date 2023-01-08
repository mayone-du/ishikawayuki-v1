import type { NextPage } from "next";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";
import { GitHubIcon } from "src/components/Icon/GitHubIcon";
import { TwitterIcon } from "src/components/Icon/TwitterIcon";
import { ZennIcon } from "src/components/Icon/ZennIcon";
import { CONSTANTS } from "src/constant";
import { staticPath } from "src/lib/$path";
import type { ArticleList } from "src/types";

const PROFILE_ICONS = [
  {
    href: CONSTANTS.twitter.PROFILE_URL,
    Icon: TwitterIcon,
  },
  {
    href: CONSTANTS.github.PROFILE_URL,
    Icon: GitHubIcon,
  },
  {
    href: CONSTANTS.zenn.PROFILE_URL,
    Icon: ZennIcon,
  },
] as const;

const fetchArticleList = async () => {
  try {
    const res = await fetch(CONSTANTS.github.ARTICLE_LIST_META_URL, {
      next: { revalidate: 60 * 60 * 24 },
    });
    const data: ArticleList = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

// @ts-expect-error Server Component
const Page: NextPage = async () => {
  const data = (await fetchArticleList()).reverse();
  const separated = data.reduce<{
    isPublished: ArticleList;
    isArchived: ArticleList;
  }>(
    (prev, cur) => {
      cur.is_published ? prev.isPublished.push(cur) : prev.isArchived.push(cur);
      return prev;
    },
    { isPublished: [], isArchived: [] }
  );
  return (
    <div>
      <div className="md:flex items-center juwtify-between mb-12">
        <div className="flex items-center justify-start gap-8 basis-1/2">
          {/* アイコンサイズの関係で、-mx-3 している */}
          <ArticleIcon className="text-8xl -mx-3" />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">Articles</h1>
            <p className="font-medium flex gap-2 items-end">
              <b className="text-2xl">{separated.isPublished.length}</b>
              <span>Published</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 basis-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="block h-32 w-32 rounded-full bg-white shadow-[-2px_-2px_6px_#FFFFFF,_3px_3px_6px_rgba(174,_174,_192,_0.4)]"
            src={staticPath.profile_jpg}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Ishikawa Yuki</p>
            <p className="font-bold">Software Developer.</p>
            <div className="flex justify-center gap-5 relative mt-2">
              {PROFILE_ICONS.map(({ Icon, href }) => {
                return (
                  <a key={href} href={href} target="_blank" rel="noreferrer">
                    <div className="w-10 h-10 neumorphism-container-preset neumorphism-container-md rounded-full before:rounded-full">
                      <div className="neumorphism-inner">
                        <Icon className="absolute" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex items-start gap-10">
        <div className="basis-3/4">
          <ul className="grid grid-cols-2 gap-10">
            {data.map((item) => {
              // {separated.isPublished.map((item) => {
              return (
                <li key={item.title} className="col-span-1">
                  {/* TODO: pathpida v13以降では、オブジェクト形式では無理らしい？ */}
                  <Link href={`/article/${item.created_at}`}>
                    <div className="h-32 neumorphism-container-preset neumorphism-container-lg">
                      <div className="neumorphism-inner">
                        <p className="font-bold text-lg text-center line-clamp-1 px-12 mb-4 drop-shadow-lg">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 pt-5 -bottom-4 absolute">
                          {item.created_at}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-10 neumorphism-container-preset neumorphism-container-md mt-10 mx-auto max-w-[200px]">
            <div className="neumorphism-inner">Select</div>
          </div>
        </div>

        <aside className="basis-1/4">
          <div className="neumorphism-container-xs flex items-center bg-neumorphism-bg p-[6px]">
            <input
              className="transition shadow-[inset_-1px_-1px_1px_rgba(255,_255,_255,_0.7),_inset_1px_1px_2px_rgba(174,_174,_192,_0.2)] focus:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.9),_inset_1px_1px_2px_rgba(174,_174,_192,_0.5)] block h-full w-full p-2 bg-neumorphism-active-bg focus:outline-none rounded-lg"
              placeholder="WIP:"
            />
            <button>
              <div className="h-8 w-8 ml-2 neumorphism-container-preset neumorphism-container-sm">
                <div className="neumorphism-inner">
                  <MdSearch className="font-bold text-xl" />
                </div>
              </div>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Page;
