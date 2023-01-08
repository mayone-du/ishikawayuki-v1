import type { FC, ReactNode } from "react";
import { ProfileInfo } from "src/components/ProfileInfo";

type Props = {
  icon: ReactNode;
  title: string;
  count: number;
};

export const PageSection: FC<Props> = ({ count, icon, title }) => {
  return (
    <div className="flex items-center juwtify-between">
      <div className="flex items-center justify-start sm:gap-8 gap-6 basis-1/2">
        {icon}
        <div className="flex flex-col sm:gap-2">
          <h1 className="sm:text-3xl text-2xl font-medium">{title}</h1>
          <p className="font-medium flex gap-2 items-end">
            <b className="sm:text-2xl text-left">{count}</b>
            <span className="sm:text-base text-sm">Published</span>
          </p>
        </div>
      </div>

      <div className="basis-1/2 hidden sm:block">
        <ProfileInfo />
      </div>
    </div>
  );
};
