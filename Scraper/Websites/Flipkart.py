import datetime
from requests_html import HTMLSession
from Product import Product
import re


class FlipkartScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Flipkart"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('.B_NuCI', first=True)
        price = res.html.find('div._30jeq3._16Jk6d', first=True)
        url = url
        imageurl = res.html.find('._396cs4._2amPTt._3qGmMb', first=True)
        time = datetime.datetime.now().strftime("%H:%M:%S, %d %B %Y - %A")

        return Product(name.text, self.parse_price(price.text), url, "https:"+imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price)))


