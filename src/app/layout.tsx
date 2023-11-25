import "src/app/globals.css";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: [] });

import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { staticPath } from "src/lib/$path";

export const metadata: Metadata = {
  title: "ishikawayuki.me",
  description: "Ishikawa Yuki's portfolio site.",
  icons: [staticPath.assets.dog_png],
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
