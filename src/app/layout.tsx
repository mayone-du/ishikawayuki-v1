import "src/styles/globals.css";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: [] });

import type { FC, PropsWithChildren } from "react";
import { staticPath } from "src/lib/$path";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      {/* TODO: dynamic head content */}
      <title>Ishikawa Yuki</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        href={staticPath.assets.dog_png}
        type="image/x-icon"
      />
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
