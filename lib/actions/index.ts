"use server";

import { scrapeAmazonProduct } from "@/lib/scrapy";
import { connectToDB } from "../mongoose";
import Product from "../models/product-model";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;


  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if (!scrapedProduct) return;

    const existingProduct = await Product.findOne({
     url:scrapedProduct.url
    });

    if (existingProduct) {
      const updatePriceHistory = [
        ...existingProduct.priceHistory,
        {
          price: scrapedProduct.currentPrice
        },
      ];
      product = {
        ...scrapedProduct,
        priceHistory: updatedPriceHistory,
      };
    }
  } catch (error: any) {
    throw new Error(`Faild to create/update product:${error.message}`);
  }
}
