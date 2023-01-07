import type { NextPage } from "next";
import { MdOutlineArticle } from "react-icons/md";

const Page: NextPage = () => {
  return (
    <div className="my-20">
      <div className="flex items-center gap-8">
        <MdOutlineArticle className="text-green-400 text-9xl -ml-4" />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Articles</h1>
          <p className="font-bold">
            <b className="text-3xl">100</b>
            <span>Published</span>
          </p>
        </div>
      </div>

      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Page;
