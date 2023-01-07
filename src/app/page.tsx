import type { NextPage } from "next";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";
import { SiGithub, SiTwitter, SiZenn } from "react-icons/si";
import { pagesPath } from "src/lib/$path";

const Index: NextPage = () => {
  return (
    <div className="my-10">
      <div className="h-32 mx-auto w-32 rounded-full bg-white shadow-[-2px_-2px_6px_#FFFFFF,_3px_3px_6px_rgba(174,_174,_192,_0.4)]"></div>
      <div className="flex flex-col items-center gap-4 mt-6">
        <p className="text-center font-bold text-3xl text-gray-500 drop-shadow-xl">
          Ishikawa Yuki
        </p>
        {/* <p className="text-4xl font-bold text-white drop-shadow-lg shadow-black">
          Ishikawa Yuki
        </p> */}

        {/* <p className="text-2xl font-bold text-white drop-shadow-md shadow-black">
          Software Developer.
        </p> */}
        <p className="text-center font-medium text-xl text-gray-500 drop-shadow-xl">
          Software Developer.
        </p>
        <p className="text-center text-lg text-blue-500 font-medium drop-shadow-xl underline hover:no-underline hover:text-blue-400 transition">
          <Link href={pagesPath.about.$url()}>Read More →</Link>
        </p>

        <div className="flex justify-center gap-5 relative mt-4">
          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiGithub className="absolute text-lg text-[#171515]" />
          </button>

          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiTwitter className="absolute text-lg text-[#1DA1F2]" />
          </button>

          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-lg w-12 h-12 p-[2px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-lg before:transition active:before:bg-[#EEEEEE]">
            <SiZenn className="absolute text-lg text-[#3EA8FF]" />
          </button>
        </div>

        <ul className="flex items-center justify-center gap-12 mt-6">
          <li>
            <Link href={pagesPath.article.$url()}>
              <div className="w-40 h-40 flex justify-center items-center bg-[#F0F0F3] shadow-[-10px_-10px_30px_#FFFFFF,_15px_15px_30px_rgba(174,_174,_192,_0.4)] rounded-2xl p-[4px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-2xl before:transition active:before:bg-[#EEEEEE]">
                <div className="absolute flex items-center justify-center flex-col">
                  <MdOutlineArticle className="text-green-400 text-7xl" />
                  <span className="font-bold text-gray-500 text-xl">
                    Articles
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={pagesPath.about.$url()}>
              <div className="w-40 h-40 flex justify-center items-center bg-[#F0F0F3] shadow-[-10px_-10px_30px_#FFFFFF,_15px_15px_30px_rgba(174,_174,_192,_0.4)] rounded-2xl p-[4px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-2xl before:transition active:before:bg-[#EEEEEE]">
                <div className="absolute flex items-center justify-center flex-col">
                  <IoMdBook className="text-orange-400 text-7xl" />
                  <span className="font-bold text-gray-500 text-xl">Diary</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>

        <div>
          <button className="flex justify-center items-center bg-[#F0F0F3] shadow-[-1px_-1px_3px_#FFFFFF,_1.5px_1.5px_3px_rgba(174,_174,_192,_0.4)] rounded-full w-24 h-24 p-[3px] hover:scale-110 transition before:block before:w-full before:h-full active:before:shadow-[inset_-1px_-1px_3px_rgba(255,_255,_255,_0.7),_inset_1px_1px_3px_rgba(174,_174,_192,_0.15)] before:rounded-full before:transition active:before:bg-[#EEEEEE]">
            <BsHeartFill className="text-red-500 absolute text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
