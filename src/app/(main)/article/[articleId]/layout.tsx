import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-10">
      <div className="basis-2/3">{children}</div>
      <aside className="basis-1/3">TODO: profile card</aside>
    </div>
  );
};

export default Layout;
