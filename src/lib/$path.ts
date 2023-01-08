export const pagesPath = {
  article: {
    _articleId: (articleId: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: "/article/[articleId]" as const,
        query: { articleId },
        hash: url?.hash,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: "/article" as const,
      hash: url?.hash,
    }),
  },
  diary: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/diary" as const,
      hash: url?.hash,
    }),
  },
  about: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/about" as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  assets: {
    $1st_place_medal_png: "/assets/1st_place_medal.png",
    building_construction_png: "/assets/building_construction.png",
    clinking_beer_mugs_png: "/assets/clinking_beer_mugs.png",
    dog_png: "/assets/dog.png",
    tiger_face_png: "/assets/tiger_face.png",
  },
  profile_jpg: "/profile.jpg",
} as const;

export type StaticPath = typeof staticPath;
