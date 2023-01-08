export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "article": {
    _articleId: (articleId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/article/[articleId]' as const, query: { articleId }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/article' as const, hash: url?.hash })
  },
  "diary": {
    $url: (url?: { hash?: string }) => ({ pathname: '/diary' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  assets: {
    clinking_beer_mugs_png: '/assets/clinking_beer_mugs.png',
    tiger_face_png: '/assets/tiger_face.png'
  },
  favicon_ico: '/favicon.ico',
  profile_jpg: '/profile.jpg'
} as const

export type StaticPath = typeof staticPath
