/** @see https://raw.githubusercontent.com/mayone-du/blog-contents/main/meta/article_list.json */
export type ArticleList = {
  title: string;
  description: string;
  emoji: string;
  is_published: boolean;
  created_at: string;
}[];

/**
 * @see https://cdn.jsdelivr.net/npm/emoji-datasource@latest/emoji.json
 * Actual, has more properties, but troublesome :)
 */
export type EmojiDataSource = {
  name: string;
  /** 'UPPER-HYPHEN-CASE' */
  unified: string;
  non_qualified: string;
  image: string;
  sheet_x: number;
  sheet_y: number;
  /** 'hyphen-case' */
  short_name: string;
  short_names: string[];
  // NOTE: More Properties...
  skin_variations: {
    "1F3FB": {
      unified: `${string}-1F3FB`;
      non_qualified: null;
      image: `${string}-1f3fb.png`;
      sheet_x: number;
      sheet_y: number;
      added_in: string;
      has_img_apple: boolean;
      has_img_google: boolean;
      has_img_twitter: boolean;
      has_img_facebook: boolean;
    };
    "1F3FC": {
      unified: `${string}-1F3FC`;
      non_qualified: null;
      image: `${string}-1f3fc.png`;
      sheet_x: number;
      sheet_y: number;
      added_in: string;
      has_img_apple: true;
      has_img_google: true;
      has_img_twitter: true;
      has_img_facebook: true;
    };
    "1F3FD": {
      unified: `${string}-1F3FD`;
      non_qualified: null;
      image: `${string}-1f3fd.png`;
      sheet_x: number;
      sheet_y: number;
      added_in: string;
      has_img_apple: true;
      has_img_google: true;
      has_img_twitter: true;
      has_img_facebook: true;
    };
    "1F3FE": {
      unified: `${string}-1F3FE`;
      non_qualified: null;
      image: `${string}-1f3fe.png`;
      sheet_x: number;
      sheet_y: number;
      added_in: string;
      has_img_apple: true;
      has_img_google: true;
      has_img_twitter: true;
      has_img_facebook: true;
    };
    "1F3FF": {
      unified: `${string}-1F3FF`;
      non_qualified: null;
      image: `${string}-1f3ff.png`;
      sheet_x: number;
      sheet_y: number;
      added_in: string;
      has_img_apple: true;
      has_img_google: true;
      has_img_twitter: true;
      has_img_facebook: true;
    };
  };
}[];
