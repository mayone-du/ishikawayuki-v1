import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-400 md:px-40 px-20">LOGO</header>
      <main className="md:px-40 px-20">{children}</main>
    </div>
  );
};

export default Layout;
