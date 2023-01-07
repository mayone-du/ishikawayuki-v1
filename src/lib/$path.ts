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
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  profile_jpg: '/profile.jpg'
} as const

export type StaticPath = typeof staticPath
