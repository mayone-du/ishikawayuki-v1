import type { NextPage } from "next";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { SiGithub, SiTwitter, SiZenn } from "react-icons/si";
import { pagesPath } from "src/lib/$path";

const Index: NextPage = () => {
  return (
    <div className="my-10">
      <div className="h-32 mx-auto w-32 rounded-full bg-white shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)]"></div>
      <div className="flex flex-col items-center gap-4 mt-6">
        <p className="text-center font-bold text-3xl text-gray-500 drop-shadow-xl">
          Ishikawa Yuki
        </p>
        <p className="text-center font-medium text-xl text-gray-500 drop-shadow-xl">
          Software Developer.
        </p>
        <p className="text-center text-lg text-blue-500 font-medium drop-shadow-xl underline hover:no-underline hover:text-blue-400 transition">
          <Link href={pagesPath.about.$url()}>Read More →</Link>
        </p>

        <div className="flex justify-center gap-5 relative mt-6">
          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiGithub
              style={{ position: "absolute", fontSize: "1.2rem" }}
              color="#171515"
            />
          </button>

          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiTwitter
              style={{ position: "absolute", fontSize: "1.2rem" }}
              color="#1DA1F2"
            />
          </button>

          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiZenn
              style={{ position: "absolute", fontSize: "1.2rem" }}
              color="#3EA8FF"
            />
          </button>
        </div>

        <ul>
          <li>
            <Link href={pagesPath.about.$url()}>
              <div className="w-40 h-40 flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-3xl p-[4px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-3xl before:transition active:before:bg-[#EEEEEE]"></div>
            </Link>
          </li>
        </ul>

        <div>
          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-full w-24 h-24 p-[3px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-full before:transition active:before:bg-[#EEEEEE]">
            <BsHeartFill
              style={{ position: "absolute", fontSize: "2.3rem" }}
              className="text-red-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
