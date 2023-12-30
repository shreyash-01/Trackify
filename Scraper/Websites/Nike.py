import datetime
from requests_html import HTMLSession
from Product import Product
import re


class NikeScraper:
    def __init__(self):
        self.session = HTMLSession()
        self.website = "Nike"

    def scrape(self, url: str) -> Product:
        res = self.session.get(url)
        name = res.html.find('.headline-2.css-16cqcdq', first=True)
        price = res.html.find('.product-price.is--current-price.css-s56yt7.css-xq7tty', first=True)
        if price is None:
            price = res.html.find('.product-price.css-11s12ax.is--current-price.css-tpaepq', first=True)
        url = url
        imageurl = res.html.find('img.css-viwop1.css-m5dkrx', first=True)
        time = datetime.datetime.now().strftime("%H:%M:%S, %d %B %Y - %A")

        return Product(name.text, self.parse_price(price.text), url, imageurl.attrs.get('src'), time, self.website)

    def parse_price(self, price: str) -> int:
        return int("".join(re.findall("[0-9]", price))[:-2])


