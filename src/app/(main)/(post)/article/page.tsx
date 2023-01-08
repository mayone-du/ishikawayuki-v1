import type { NextPage } from "next";
import Link from "next/link";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";
import { Pagination } from "src/components/Pagination";
import { SearchBox } from "src/components/SearchBox";
import { CONSTANTS } from "src/constant";
import type { ArticleList } from "src/types";

import { PageSection } from "../PageSection";

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
      <div className="mb-12">
        <PageSection
          icon={<ArticleIcon className="text-8xl -mx-3" />}
          title={"Article"}
          count={separated.isPublished.length}
        />
      </div>

      <div className="lg:flex items-start gap-10 max-w-5xl mx-auto">
        <div className="basis-3/4">
          <ul className="grid grid-cols-2 gap-10">
            {separated.isPublished.map((item) => {
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

          <Pagination />
        </div>

        <aside className="basis-1/4">
          <SearchBox articleList={separated.isPublished} />
        </aside>
      </div>
    </div>
  );
};

export default Page;
