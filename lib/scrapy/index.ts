import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice } from "../utils";
import { describe } from "node:test";
export async function scrapeAmazonProduct(url: string) {
  if (!url) {
    return;
  }

  const username = String(process.env.BRIGTH_DATA_USERNAME);
  const password = String(process.env.BRIGTH_DATA_PASSWORD);
  const port = 22225;

  const session_id = (1000000 * Math.random()) | 0;
  const option = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, option);

    const $ = cheerio.load(response.data);
    // console.log(response.data);

    const title = $("#productTitle").text().trim();

    const currentPrice = extractPrice(
      $(".priceToPay span.a-price-whole"),
      $(".a.sizebase.a-color-price"),
      $(".a-button-selected .a-color-base")
    );
    const orignalPrice = extractPrice(
      $("#priceblock_ourprice"),
      $(".a-price.a-text-price span.a-offscreen")
    );

    const outOfStock =
      $("#availability span").text().trim().toLowerCase() ===
      "currently unavailable";

    const images =
      $("#imgBlockFront").attr("data-a-dynamic-image") ||
      $("#landingImage").attr("data-a-dynamic-image") ||
      "{}";

    const imageUrls = Object.keys(JSON.parse(images));
    const currency = extractCurrency($(".a-price-symbol"));
    const discountRate = $(".savingsPercentage").text().replace(/[-%]/g, "");
    const discreption = extractDescription($);

    const data = {
      url,
      currency: currency || "$",
      image: imageUrls[0],
      title,
      currentPrice: Number(currentPrice) || Number(orignalPrice),
      orignalPrice: Number(orignalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category: "category",
      reviewCount: 100,
      stars: 4.5,
      isOutOfStock: outOfStock,
      discreption,
      lowestPrice: Number(currentPrice) || Number(orignalPrice),
      highestPrice: Number(orignalPrice) || Number(currentPrice),
      average: Number(currentPrice) || Number(orignalPrice),
    };
    return data;
  } catch (error: any) {
    throw new Error(`Faild to scrape product :${error.message}`);
  }
}



