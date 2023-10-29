import type { NextPage } from "next";
import Link from "next/link";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ArticleIcon } from "src/components/Icon/ArticleIcon";
import { DiaryIcon } from "src/components/Icon/DiaryIcon";
import { ProfileIcon } from "src/components/Icon/ProfileIcon";
import { ProfileLink } from "src/components/ProfileLink";
import { TabBox } from "src/components/TabBox";
import { pagesPath } from "src/lib/$path";
import { PROFILE_LINKS } from "src/util/links";

const MENU_ITEMS = [
  { href: pagesPath.about.$url(), label: "About", Icon: ProfileIcon },
  { href: pagesPath.article.$url(), label: "Article", Icon: ArticleIcon },
  { href: pagesPath.diary.$url(), label: "Diary", Icon: DiaryIcon },
] as const;

const Index: NextPage = () => {
  return (
    <div className="sm:mt-24 mt-6 sm:mx-0 mx-6">
      <div className="flex flex-col sm:gap-12 gap-6 items-center mx-auto max-w-2xl">
        <div className="neumorphism-container-lg sm:py-12 py-6 w-full bg-neumorphism-bg mx-auto">
          <div className="flex justify-center flex-col sm:flex-row items-center sm:gap-16 gap-6">
            <ProfileLink />

            <div className="flex flex-col sm:gap-4 gap-3">
              <h1 className="font-bold sm:text-3xl text-2xl drop-shadow-lg">
                Ishikawa Yuki
              </h1>
              <p className="font-medium sm:text-lg text-base drop-shadow-lg">
                Software Developer.
              </p>
              <div className="flex gap-5 relative mt-2">
                {PROFILE_LINKS.map(({ Icon, href }) => {
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

        <div className="flex sm:flex-row flex-col-reverse w-full sm:gap-12 gap-6">
          <div className="basis-1/2">
            <TabBox />
          </div>

          <nav className="basis-1/2 flex flex-col sm:gap-10 gap-6">
            {MENU_ITEMS.map(({ Icon, href, label }) => {
              return (
                <Link
                  key={href.pathname}
                  href={href}
                  className="h-16 w-full neumorphism-container-preset neumorphism-container-lg bg-neumorphism-bg justify-between rounded-full before:rounded-full"
                >
                  <div className="neumorphism-inner flex-row justify-between w-full px-6">
                    <div className="flex gap-6">
                      <Icon className="text-3xl" />
                      <span className="font-bold text-xl drop-shadow">
                        {label}
                      </span>
                    </div>
                    <BsFillCaretRightFill
                      className="text-3xl text-neumorphism-bg scale-75"
                      style={{
                        filter:
                          "drop-shadow(1px 3px 1.5px rgba(0,0,0,0.1)) drop-shadow(-1.8px -3.5px 1.8px rgba(255,255,255,1))",
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Index;
