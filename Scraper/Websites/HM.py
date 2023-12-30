import datetime
from requests_html import HTMLSession
from Product import Product
import re


class HMScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "H&M"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('h1', first=True)
        price = res.html.find('.price-value', first=True)
        url = url
        imageurl = res.html.find('img')
        time = datetime.datetime.now().strftime("%H:%M:%S, %d %B %Y - %A")

        return Product(name.text, self.parse_price(price.text), url, "https:"+imageurl[1].attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price))[:-2])


