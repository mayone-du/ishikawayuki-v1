import type { NextApiHandler } from "next";
import { CONSTANTS } from "src/constant";
import type { EmojiApiResponse, EmojiDataSource } from "src/types";

// TODO: 共通化、Zod導入

const getCodePoint = (emoji: string) => {
  return emoji.codePointAt(0)?.toString(16).toUpperCase();
};

const handler: NextApiHandler<EmojiApiResponse> = async (req, res) => {
  if (req.method !== "POST")
    res.status(400).json({ error: "Method not allowed." });
  const reqEmoji: string = req.body;
  const codePoint = getCodePoint(reqEmoji);
  const emojiRes = await fetch(CONSTANTS.emoji.DATA_SOURCE);
  const data: EmojiDataSource = await emojiRes.json();
  const hit = data.find((item) => item.unified === codePoint);

  if (!hit) return res.status(404).json({ error: "Not Found." });

  const lowerSnakeCase = hit.name.toLowerCase().replaceAll(" ", "_");
  return res.status(200).json({ imagePath: `/assets/${lowerSnakeCase}.png` });
};

export default handler;
