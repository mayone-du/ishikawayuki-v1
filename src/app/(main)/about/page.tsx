import type { NextPage } from "next";
import { Markdown } from "src/components/Markdown";
import { CONSTANTS } from "src/constant";
import { staticPath } from "src/lib/$path";
import { PROFILE_LINKS } from "src/util/links";

const getProfileMarkdown = async () => {
  const res = await fetch(CONSTANTS.github.PROFILE_MD_URL);
  const data = await res.text();
  return data;
};

// @ts-expect-error Server Component
const Page: NextPage = async () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _data = await getProfileMarkdown();
  return (
    <div className="lg:flex items-start gap-10 max-w-5xl mx-auto">
      <div className="basis-3/4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="block h-40 w-40 rounded-full neumorphism-container-xl p-4 z-10 bg-neumorphism-active-bg relative"
          src={staticPath.profile_jpg}
          alt=""
        />

        <div className="neumorphism-container-xl -translate-y-24 z-0 relative p-8 bg-neumorphism-bg ml-auto w-[calc(100%/8*7)]">
          <div className="shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_15px_15px_30px_rgba(174,_174,_192,_0.4)] rounded-lg py-8 px-24 bg-neumorphism-active-bg">
            <div className="flex items-center">
              <div className="mx-auto flex flex-col items-center gap-4">
                <h1 className="font-bold text-3xl drop-shadow-lg">
                  Ishikawa Yuki
                </h1>
                <p className="font-medium text-lg drop-shadow-lg">
                  Software Developer.
                </p>
                <div className="flex gap-5 relative mt-2">
                  {PROFILE_LINKS.map(({ Icon, href }) => {
                    return (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
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

              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src={staticPath.assets.$1st_place_medal_png}
                alt="1st place medal"
                className="block h-20 w-20"
              /> */}
            </div>
          </div>

          <div className="mt-8">
            <Markdown markdownText={md} />
            {/* <Markdown markdownText={data} /> */}
          </div>
        </div>
      </div>

      <aside className="basis-1/4">
        <div className="neumorphism-container-xl bg-neumorphism-active-bg">
          <div className="p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={staticPath.assets.building_construction_png}
              alt="building_construction"
              className="block h-32 w-32 mx-auto drop-shadow-md"
            />

            <h3 className="text-center text-lg font-bold mt-2">
              Development Now!
            </h3>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Page;

const md = `
# About Me

## ❤️‍🔥 Favorites things
- Enginnering

## 🤢 Dislikes
- ...

## 💻 Skill set
- HTML / CSS / JavaScript


## 📝 ... Now Writing ... 📝

`;
