import type { FC } from "react";

const Page: FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-12 mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            "https://raw.githubusercontent.com/microsoft/fluentui-emoji/558ab792aec59eb639671d41c5666ef12f6d0d80/assets/Construction/3D/construction_3d.png"
          }
          alt="Work In Progress."
          className="h-60 w-60 mx-auto block drop-shadow-xl"
        />
        <h1 className="font-bold text-5xl text-center">Work In Progress.</h1>
      </div>
    </div>
  );
};

export default Page;
