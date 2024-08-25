import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";
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

    const $ = cheerio.load(response.data)
    // console.log(response.data);

     const title  = $('#productTitle').text().trim()
     console.log(title)
     const currentPrice =extractPrice(

      $('.priceoPay span.a-price-whole'),
      $('.a.sizebase.a-color-price'),
      $('.a-button-selected .a-color-base'),
     )
  } catch (error: any) {
    throw new Error(`Faild to scrape product :${error.message}`);
  }
}
