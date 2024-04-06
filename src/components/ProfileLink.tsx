import Link from "next/link";
import type { FC } from "react";
import { pagesPath, staticPath } from "src/lib/$path";

export const ProfileLink: FC = () => {
  return (
    <Link
      href={pagesPath.about.$url()}
      className="sm:h-36 h-28 aspect-square neumorphism-container-preset neumorphism-container-lg rounded-full before:rounded-full"
    >
      <div className="neumorphism-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="block object-cover sm:h-28 h-20 aspect-square rounded-full"
          src={staticPath.profile_jpg}
          alt=""
        />
      </div>
    </Link>
  );
};
