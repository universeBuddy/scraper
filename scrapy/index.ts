export async function scrapeAmazonProduct(url:string){

    if(url){
        return;
    }

    const username = String(process.env.BRIGTH_DATA_USERNAME);
    const password = String(process.env.BRIGTH_DATA_PASSWORD);
    const port = 22225

    const session_id = (1000000  * Math.random()) |0
}