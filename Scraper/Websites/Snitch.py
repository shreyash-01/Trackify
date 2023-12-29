import datetime
from requests_html import HTMLSession
from Product import Product
import re


class SnitchScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Snitch"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('.h2.product-single__title', first=True)
        price = res.html.find('.product__price', first=True)
        url = url
        imageurl = res.html.find('.photoswipe__image.image-element', first=True)
        time = datetime.datetime.now().strftime("%H:%M:%S, %d %B %Y - %A")

        return Product(name.text, self.parse_price(price.text), url, "https:"+imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price)))


