from requests_html import HTMLSession
from Product import Product
from Time import get_time
import re


class NykaaScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Nykaa"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('h1', first=True)
        price = res.html.find('.css-1jczs19', first=True)
        url = url
        imageurl = res.html.find('img[alt="product-thumbnail"]', first=True)
        time = get_time()

        return Product(name.text.split('\n')[0], self.parse_price(price.text), url, imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price)))


