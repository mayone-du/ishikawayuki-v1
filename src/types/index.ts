/** @see https://raw.githubusercontent.com/mayone-du/blog-contents/main/meta/article_list.json */
export type ArticleList = {
  title: string;
  description: string;
  emoji: string;
  is_published: boolean;
  created_at: string;
}[];

/**
 * @see https://cdn.jsdelivr.net/npm/emoji-datasource@14.0.0/emoji.json
 * Actual, has more properties, but troublesome :)
 */
export type EmojiDataSource = {
  name: string;
  unified: string;
  non_qualified: string;
  image: string;
  sheet_x: number;
  sheet_y: number;
  short_name: string;
  short_names: string[];
  // NOTE: More Properties...
}[];

// #region Next.js API Routes
/**
 *
 */
type ErrorResponse = { error: string };

export type EmojiApiResponse =
  | {
      imagePath: string;
    }
  | ErrorResponse;

// #endregion
