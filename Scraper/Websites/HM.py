from requests_html import HTMLSession
from Product import Product
from Time import get_time

import re


class HMScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "H&M"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('h1', first=True)
        price = res.html.find('.edbe20.ac3d9e.d9ca8b.e29fbf', first=True)
        url = url
        imageurl = res.html.find('img')
        time = get_time()

        return Product(name.text, self.parse_price(price.text), url, "https:"+imageurl[1].attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price))[:-2])


