const puppeteer = require("puppeteer");

const url =
  "https://www.asos.com/asos-tall/asos-design-tall-high-rise-slim-stretch-straight-leg-jean-in-brightwash/prd/21116821?colourwayid=60141625&SearchQuery=&cid=4331";

  const url2 = 'https://www.amazon.com/gp/product/B0043D28B4?pf_rd_r=052FV10NNQC9AEZZM51P&pf_rd_p=6fc81c8c-2a38-41c6-a68a-f78c79e7253f';
(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
  );

  await page.setViewport({
    width: 1366,
    height: 768,
  });

  await page.goto(url2);

  const getData = await page.evaluate(() => {
    let title = document.title;

    const properties = {}
    let priceElement = document.querySelector('body');
    properties.price = priceElement ? priceElement.getAttribute('$') : ' ';
    //includes('$' || '£' || '₹' || '€')].map((quote) =>{
       // console.log(quote);
   // });

    let arrayPosition = 1;
    const image = [...document.getElementsByTagName("img")].sort(
      (a, b) =>
        b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight
    )[arrayPosition].src;
    if (image.length === 0) {
      arrayPosition++;
    }
    return {
      image,
      title,
      price
    };
  });
  await browser.close();
  console.log(getData);
})();
