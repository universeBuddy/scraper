"use server";

import { scrapeAmazonProduct } from "@/lib/scrapy";
import { connectToDB } from "../mongoose";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;
  try {
   connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if (!scrapedProduct) return;


    const existingProduct  = await Product.
  } catch (error: any) {
    throw new Error(`Faild to create/update product:${error.message}`);
  }
}
