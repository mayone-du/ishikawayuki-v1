import type { FC } from "react";
import { staticPath } from "src/lib/$path";
import { PROFILE_LINKS } from "src/util/links";

export const ProfileInfo: FC = () => {
  return (
    <div className="flex items-center justify-end gap-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="block h-32 w-32 rounded-full bg-white shadow-[-2px_-2px_6px_#FFFFFF,_3px_3px_6px_rgba(174,_174,_192,_0.4)]"
        src={staticPath.profile_jpg}
        alt=""
      />
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
