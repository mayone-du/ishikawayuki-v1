import "src/styles/globals.css";

import { Rubik } from "@next/font/google";

const rubik = Rubik();

import type { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <body className={`bg-main-bg text-main-text ${rubik.style.fontFamily}`}>
        {children}

        <footer className="mt-10">
          <p className="text-center py-8 text-sm">© 2023 Ishikawa Yuki</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
