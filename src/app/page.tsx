import type { NextPage } from "next";
import Link from "next/link";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";
import { DiaryIcon } from "src/components/Icon/DiaryIcon";
import { pagesPath, staticPath } from "src/lib/$path";
import { PROFILE_LINKS } from "src/util/links";

const Index: NextPage = () => {
  return (
    <div className="mt-16 mb-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="block h-32 mx-auto w-32 rounded-full bg-white shadow-[-2px_-2px_6px_#FFFFFF,_3px_3px_6px_rgba(174,_174,_192,_0.4)]"
        src={staticPath.profile_jpg}
        alt=""
      />
      <div className="flex flex-col items-center gap-4 mt-6">
        <p className="text-center font-bold text-3xl drop-shadow-xl">
          Ishikawa Yuki
        </p>

        <p className="text-center font-medium text-xl drop-shadow-xl">
          Software Developer.
        </p>
        <p className="text-center text-lg text-blue-500 font-medium drop-shadow-xl underline hover:no-underline hover:text-blue-400 transition">
          <Link href={pagesPath.about.$url()}>Read More →</Link>
        </p>

        <div className="flex justify-center gap-5 relative mt-4">
          {PROFILE_LINKS.map(({ Icon, href }) => {
            return (
              <a key={href} href={href} target="_blank" rel="noreferrer">
                <div className="w-12 h-12 neumorphism-container-preset neumorphism-container-md">
                  <div className="neumorphism-inner">
                    <Icon className="absolute text-lg" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <ul className="flex items-center justify-center gap-12 mt-12">
          <li>
            <Link href={pagesPath.article.$url()}>
              <div className="w-40 h-40 neumorphism-container-preset neumorphism-container-xl">
                <div className="neumorphism-inner">
                  <ArticleIcon className="text-7xl" />
                  <span className="font-bold text-xl">Articles</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={pagesPath.diary.$url()}>
              <div className="w-40 h-40 neumorphism-container-preset neumorphism-container-xl">
                <div className="neumorphism-inner">
                  <DiaryIcon className="text-7xl" />
                  <span className="font-bold text-xl">Diary</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
