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
const Page: FC = async () => {
  const data = await getProfileMarkdown();

  const [, , content] = data.split("---");

  if (!content) return null;

  return (
    <div className="lg:flex items-start gap-10 max-w-5xl mx-auto">
      <div className="basis-3/4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="block sm:h-40 h-28 aspect-square rounded-full neumorphism-container-xl sm:p-4 p-3 z-10 bg-neumorphism-active-bg relative sm:m-0 mx-auto"
          src={staticPath.profile_jpg}
          alt=""
        />

        <div className="neumorphism-container-xl sm:-translate-y-28 -translate-y-12 z-0 relative sm:p-8 p-4 bg-neumorphism-bg sm:ml-auto mx-auto sm:w-11/12 w-full">
          <div className="shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_15px_15px_30px_rgba(174,_174,_192,_0.4)] rounded-lg py-8 sm:px-24 px-6 bg-neumorphism-active-bg">
            <div className="flex items-center">
              <div className="mx-auto flex flex-col items-center sm:gap-4 gap-3 sm:pt-0 pt-2">
                <h1 className="font-bold sm:text-3xl text-2xl drop-shadow-lg">
                  Ishikawa Yuki
                </h1>
                <p className="font-medium sm:text-lg text-base drop-shadow-lg">
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
            </div>
          </div>

          <div className="mt-8">
            <Markdown markdownText={content} />
          </div>
        </div>
      </div>

      <aside className="basis-1/4 translate-y-12">
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
