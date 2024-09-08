from requests_html import HTMLSession
from Product import Product
from Time import get_time
import re


class NikeScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Nike"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('.nds-text.css-1h3ryhm', first=True)
        price = res.html.find('.nds-text.mr2-sm.css-tbgmka', first=True)
        if price is None:
            price = res.html.find('.nds-text.mr2-sm.css-tbgmka', first=True)
        url = url
        imageurl = res.html.find('img.css-1vqvh57', first=True)
        time = get_time()

        return Product(name.text, self.parse_price(price.text), url, imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price))[:-2])


