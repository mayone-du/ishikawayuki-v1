const GITHUB_USERNAME = `mayone-du`;
const BLOG_REPOSITORY_NAME = `blog-contents`;
const MAIN_BRANCH = `main`;

export const CONSTANTS = {
  github: {
    PROFILE_URL: `https://github.com/${GITHUB_USERNAME}`,
    RAW_MARKDOWN_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}/README.md`,
    ARTICLE_LIST_META_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}/meta/article_list.json`,
    OTHER_LIST_META_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}/meta/other_list.json`,
    ARTICLE_BASE_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}/articles/`,
    PROFILE_MD_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}/others/profile.md`,
    RESUME_MD_URL: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/resume/main/docs/Resume.md`,
  },
  zenn: {
    PROFILE_URL: `https://zenn.dev/mayo_dev`,
  },
  twitter: {
    PROFILE_URL: `https://twitter.com/mayo__dev`,
  },
  emoji: {
    DATA_SOURCE:
      "https://cdn.jsdelivr.net/npm/emoji-datasource@14.0.0/emoji.json",
  },
} as const;
