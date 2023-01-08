import type { FC, ReactNode } from "react";
import { ProfileInfo } from "src/components/ProfileInfo";

type Props = {
  icon: ReactNode;
  title: string;
  count: number;
};

export const PageSection: FC<Props> = ({ count, icon, title }) => {
  return (
    <div className="md:flex items-center juwtify-between">
      <div className="flex items-center justify-start gap-8 basis-1/2">
        {icon}
        {/* アイコンサイズの関係で、-mx-3 している */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">{title}</h1>
          <p className="font-medium flex gap-2 items-end">
            <b className="text-2xl">{count}</b>
            <span>Published</span>
          </p>
        </div>
      </div>

      <div className="basis-1/2">
        <ProfileInfo />
      </div>
    </div>
  );
};
