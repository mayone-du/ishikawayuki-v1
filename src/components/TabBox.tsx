"use client";
import type { FC } from "react";
import { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { SiSpotify } from "react-icons/si";
import { staticPath } from "src/lib/$path";

const TAB_VALUES = ["Family", "Portfolio", "Like"] as const;

const PORTFOLIO_ITEMS = [
  {
    href: "https://mayoblog.vercel.app/",
    label: "Blog. Used microCMS.",
  },
  {
    href: "https://mayone-du.github.io/yew-blog",
    label: "Blog. Written in Rust.",
  },
  {
    href: "https://ishikawayuki.me",
    label: "This Site.",
  },
] as const;

export const TabBox: FC = () => {
  const [tabVal, setTabVal] = useState<typeof TAB_VALUES[number]>(
    TAB_VALUES[0]
  );

  const ref = useRef<HTMLDivElement | null>(null);

  const [tabWidth, setTabWidth] = useState(0);

  useLayoutEffect(() => {
    setTabWidth(ref.current?.offsetWidth ?? 0);
  }, []);

  const handleChangeTab = (val: typeof tabVal) => () => setTabVal(val);
  const currentIndex = TAB_VALUES.findIndex((val) => val === tabVal);

  return (
    <div className="neumorphism-container-xl bg-neumorphism-bg p-2">
      <div
        ref={ref}
        className="relative flex items-center justify-around gap-2 shadow-[inset_-1px_-1px_1px_rgba(255,_255,_255,_0.7),_inset_1px_1px_2px_rgba(174,_174,_192,_0.2)] p-2 rounded-xl bg-neumorphism-active-bg"
      >
        <span
          className={`absolute py-[calc(1rem+2px)] pointer-events-none w-[calc((100%-2rem)/3)] rounded-lg left-2 top-2 transition-all neumorphism-container-sm bg-neumorphism-bg`}
          style={{
            transform: `translateX(${((tabWidth - 8) / 3) * currentIndex}px)`,
          }}
        />
        {TAB_VALUES.map((val) => {
          const isSelected = tabVal === val;
          return (
            <button
              key={val}
              className={`block py-1.5 z-10 rounded-lg basis-1/3 transition-all ${
                isSelected ? "" : "opacity-70 hover:opacity-100"
              }`}
              onClick={handleChangeTab(val)}
            >
              <span className="text-sm">{val}</span>
            </button>
          );
        })}
      </div>
      <div className="pt-2">
        {tabVal === "Family" && <FamilyConents />}
        {tabVal === "Portfolio" && <PortfolioContents />}
        {tabVal === "Like" && <LikeContents />}
      </div>
    </div>
  );
};

const PortfolioContents: FC = () => {
  return (
    <ul>
      {PORTFOLIO_ITEMS.map(({ href, label }, i) => {
        const isLast = PORTFOLIO_ITEMS.length - 1 === i;
        return (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              className="py-1.5 opacity-80 hover:opacity-100 transition-all px-2 flex justify-between w-full"
              rel="noreferrer"
            >
              <h3 className="font-bold text-xs">{label}</h3>
              <IoMdArrowRoundUp className="rotate-45" />
            </a>
            {!isLast && (
              <div className="w-full my-2 h-2 rounded-md bg-neumorphism-active-bg shadow-[inset_-1px_-1px_1px_rgba(255,_255,_255,_0.7),_inset_1px_1px_2px_rgba(174,_174,_192,_0.2)]" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const FamilyConents: FC = () => {
  return (
    <div>
      <div className="shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_15px_15px_30px_rgba(174,_174,_192,_0.3)] rounded-lg p-4 bg-neumorphism-active-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={staticPath.assets.sunflower_png}
          className="block aspect-square h-20 mx-auto rounded-full p-4 bg-neumorphism-active-bg shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.6),_inset_1px_1px_3px_rgba(174,_174,_192,_0.2)]"
          alt=""
        />
        <div className="p-2 text-center flex flex-col gap-2">
          <h2 className="text-lg font-bold">Himawari</h2>
          <p className="text-sm">
            A toy poodle that came from a rescued dog cafe.
          </p>
        </div>
      </div>
    </div>
  );
};
const LikeContents: FC = () => {
  return (
    <div>
      <a
        href="https://open.spotify.com/track/0XeyTwIqd2GPPcIFpM10IX?si=d095e697db9e41da"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 w-full p-2 opacity-80 hover:opacity-100 transition-all"
      >
        <SiSpotify className="text-xl text-[#1DB954]" />
        <div className="flex items-center gap-6 w-full">
          <div className="font-bold">ETA</div>

          <div className="text-xs">by 米津玄師</div>
        </div>
        <IoMdArrowRoundUp className="text-xl rotate-45" />
      </a>
    </div>
  );
};
