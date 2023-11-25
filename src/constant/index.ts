const GITHUB_USERNAME = `mayone-du`;
const BLOG_REPOSITORY_NAME = `blog-contents`;
const MAIN_BRANCH = `main`;

const RAW_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${BLOG_REPOSITORY_NAME}/${MAIN_BRANCH}`;

export const CONSTANTS = {
  github: {
    PROFILE_URL: `https://github.com/${GITHUB_USERNAME}`,
    RAW_MARKDOWN_URL: `${RAW_URL}/README.md`,
    IMAGE_BASE_URL: `${RAW_URL}/images`,
    ARTICLE_LIST_META_URL: `${RAW_URL}/meta/article_list.json`,
    OTHER_LIST_META_URL: `${RAW_URL}/meta/other_list.json`,
    ARTICLE_BASE_URL: `${RAW_URL}/articles/`,
    PROFILE_MD_URL: `${RAW_URL}/others/profile.md`,
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
      "https://cdn.jsdelivr.net/npm/emoji-datasource@14.0/emoji.json",
    // "https://cdn.jsdelivr.net/npm/emoji-datasource@latest/emoji.json",
  },
  origin: {
    HOST:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://ishikawayuki-v1.vercel.app",
  },
} as const;
