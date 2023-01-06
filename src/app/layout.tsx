import "src/styles/globals.css";

import type { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <body className="bg-[#E5E5E5]">{children}</body>
    </html>
  );
};

export default RootLayout;
