"use client";
import Link from "next/link";
import type { ChangeEventHandler, FC } from "react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import type { ArticleList } from "src/types";

type Props = {
  articleList: ArticleList;
};

export const SearchBox: FC<Props> = ({ articleList }) => {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeyword(event.target.value);
  };

  const matchedArticleList = articleList.filter((item) => {
    return item.title.includes(keyword);
  });

  return (
    <div className="neumorphism-container-xs bg-neumorphism-bg p-[6px]">
      <div className="flex items-center">
        <input
          className="transition shadow-[inset_-1px_-1px_1px_rgba(255,_255,_255,_0.7),_inset_1px_1px_2px_rgba(174,_174,_192,_0.2)] focus:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.9),_inset_1px_1px_2px_rgba(174,_174,_192,_0.5)] block h-full w-full p-2 bg-neumorphism-active-bg focus:outline-none rounded-lg"
          placeholder="Search..."
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <button className="ml-2">
          <div className="h-8 w-8 neumorphism-container-preset neumorphism-container-sm">
            <div className="neumorphism-inner">
              <MdSearch className="font-bold text-xl" />
            </div>
          </div>
        </button>
      </div>

      <div className={`transition-all ${keyword ? "pt-1" : "h-0 pt-0"}`}>
        <div className={`${keyword ? "block" : "hidden"}`}>
          <h3 className="px-2 py-1 flex items-center gap-1">
            <b className="text-lg">{matchedArticleList.length}</b>
            <span>Hits</span>
          </h3>
          <ul className="p-1 flex flex-col gap-4">
            {matchedArticleList.map((item) => {
              return (
                <Link
                  key={item.created_at}
                  href={`/article/${item.created_at}`}
                >
                  <li className="neumorphism-container-md">
                    <div className="text-left p-2 text-sm">
                      {[...item.title].map((str, i) => {
                        return (
                          <span
                            key={i}
                            className={`${
                              keyword.includes(str) ? "font-black" : ""
                            }`}
                          >
                            {str}
                          </span>
                        );
                      })}
                      {/* {item.title} */}
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
