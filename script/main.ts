import * as fs from "node:fs";

import { load } from "cheerio";

import { CONSTANTS } from "../src/constant";
import type { ArticleList, EmojiDataSource } from "../src/types";

const fetchArticleList = async () => {
  try {
    const res = await fetch(CONSTANTS.github.ARTICLE_LIST_META_URL);
    const data = (await res.json()) as ArticleList;
    return data;
  } catch (err) {
    throw err;
  }
};

const getCodePoint = (emoji: string) => {
  return emoji.codePointAt(0)?.toString(16).toUpperCase();
};

const downloadMicrosoftTeamsEmoji = async (upperCaseEmojiName: string) => {
  const lowerHyphenCase = upperCaseEmojiName.toLowerCase().replaceAll(" ", "-");
  const url = `https://emojipedia.org/microsoft-teams/1.0/${lowerHyphenCase}`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = load(html);
  const imageUrl = $(".vendor-set-emoji-image").children("img").attr("src");
  if (!imageUrl) return;
  const imageRes = await (await fetch(imageUrl)).arrayBuffer();
  const savePath = `public/assets/${lowerHyphenCase}.png`;
  fs.writeFileSync(savePath, Buffer.from(imageRes), "binary");
};

const main = async () => {
  const articleList = await fetchArticleList();
  articleList.forEach(async ({ emoji }) => {
    const codePoint = getCodePoint(emoji);
    const emojiDataSourceRes = await fetch(CONSTANTS.emoji.DATA_SOURCE);
    const emojiDataSource =
      (await emojiDataSourceRes.json()) as EmojiDataSource;
    const hit = emojiDataSource.find((item) => item.unified === codePoint);
    if (!hit) return;
    await downloadMicrosoftTeamsEmoji(hit.name);
  });
};

main();
