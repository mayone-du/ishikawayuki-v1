import Link from "next/link";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";

import { PageSection } from "../PageSection";

const Page = async () => {
  return (
    <div>
      <div className="sm:mb-12 mb-6">
        <PageSection
          icon={<ArticleIcon className="sm:text-8xl text-7xl -mx-3" />}
          title={"Article"}
          count={1}
        />
      </div>

      <div className="flex lg:flex-row flex-col-reverse lg:items-start sm:gap-10 gap-8 max-w-5xl mx-auto">
        <div className="basis-3/4">
          <ul className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8">
            <li className="col-span-1">
              <Link
                href={`https://tech.aisaac.jp/entry/2023/09/26/130758`}
                target="_blank"
              >
                <div className="h-32 neumorphism-container-preset sm:neumorphism-container-lg neumorphism-container-md">
                  <div className="neumorphism-inner">
                    <p className="font-bold text-lg text-center line-clamp-1 px-12 mb-4 drop-shadow-lg">
                      {"App Router を本番環境で使ってみた"}
                    </p>
                    <p className="text-xs text-gray-400 pt-5 -bottom-4 absolute">
                      {"2023-09-26"}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <aside className="basis-1/4" />
      </div>
    </div>
  );
};

export default Page;
