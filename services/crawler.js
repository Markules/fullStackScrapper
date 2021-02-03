const puppeteer = require("puppeteer");


exports.crawlUrl = async (url) => {
  console.log(url)
  try {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
  );

  await page.setViewport({
    width: 1366,
    height: 768,
  });

  await page.goto(url);

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
  return getData;
} catch(error) {
  res.status(400).send(error);
}
};

