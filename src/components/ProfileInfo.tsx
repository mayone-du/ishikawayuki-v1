import type { FC } from "react";
import { PROFILE_LINKS } from "src/util/links";

import { ProfileLink } from "./ProfileLink";

export const ProfileInfo: FC = () => {
  return (
    <div className="flex items-center justify-end gap-6">
      <ProfileLink />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl drop-shadow-sm">Ishikawa Yuki</p>
        <p className="font-bold drop-shadow-sm">Software Developer.</p>
        <div className="flex justify-center gap-5 relative mt-2">
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
  );
};

// <Link
// href={pagesPath.about.$url()}
// className="rounded-full neumorphism-container-xl p-4 z-10 relative h-32 w-32 hover:scale-110 transition-all bg-neumorphism-active-bg"
// >
// {/* eslint-disable-next-line @next/next/no-img-element */}
// <img
//   className="block  rounded-full"
//   src={staticPath.profile_jpg}
//   alt=""
// />
// </Link>
