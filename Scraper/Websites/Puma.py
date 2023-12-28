import datetime
from requests_html import HTMLSession
from Product import Product
import re


class PumaScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Puma"

    def scrape(self, url):
        res = self.session.get(url)
        name = res.html.find('h1', first=True)
        price = res.html.find('.whitespace-nowrap.text-base.text-puma-red.font-bold', first=True)
        url = url
        imageurl = res.html.find('img.w-full.bg-puma-black-800.aspect-1-1', first=True)
        time = datetime.datetime.now().strftime("%H:%M:%S, %d %B %Y - %A")

        return Product(name.text, self.parse_price(price.text), url, imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str):
        return int("".join(re.findall("[0-9]", price)))


