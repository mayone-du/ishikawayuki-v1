import type { FC } from "react";
import { staticPath } from "src/lib/$path";

const Head: FC = () => {
  return (
    <>
      <title>Ishikawa Yuki</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        href={staticPath.assets.dog_png}
        type="image/x-icon"
      />
    </>
  );
};

export default Head;
