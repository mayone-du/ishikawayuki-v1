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

const getFluentEmojiUrl = (upperCaseEmojiName: string) => {
  const firstStrUpperSpaceCase =
    upperCaseEmojiName.charAt(0).toUpperCase() +
    upperCaseEmojiName.slice(1).toLowerCase();
  const lowerSnakeCase = upperCaseEmojiName.toLowerCase().replaceAll(" ", "_");

  const url = `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/${encodeURI(
    firstStrUpperSpaceCase
  )}/3D/${lowerSnakeCase}_3d.png`;
  return url;
};

const getMicrosoftTeamsEmojiUrl = async (upperCaseEmojiName: string) => {
  const lowerHyphenCase = upperCaseEmojiName.toLowerCase().replaceAll(" ", "-");
  const url = `https://emojipedia.org/microsoft-teams/1.0/${lowerHyphenCase}`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = load(html);
  const imageUrl = $(".vendor-set-emoji-image").children("img").attr("src");
  return imageUrl;
};

const downloadFromImageUrl = async (url: string, name: string) => {
  const imageRes = await (await fetch(url)).arrayBuffer();
  const savePath = `public/assets/${name}.png`;
  fs.writeFileSync(savePath, Buffer.from(imageRes), "binary");
};

const main = async () => {
  const articleList = await fetchArticleList();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  articleList.forEach(async ({ emoji, is_published }) => {
    if (!is_published) return;
    const codePoint = getCodePoint(emoji);
    const emojiDataSourceRes = await fetch(CONSTANTS.emoji.DATA_SOURCE);
    const emojiDataSource =
      (await emojiDataSourceRes.json()) as EmojiDataSource;
    const hit = emojiDataSource.find((item) => item.unified === codePoint);
    if (!hit) return;
    const lowerSnakeCase = hit.name.toLowerCase().replaceAll(" ", "_");
    try {
      let imageUrl = await getMicrosoftTeamsEmojiUrl(hit.name);
      if (!imageUrl) imageUrl = getFluentEmojiUrl(hit.name);
      if (!imageUrl) return;
      downloadFromImageUrl(imageUrl, lowerSnakeCase);
    } catch (error) {
      console.error(error);
    }
  });
};

main();
