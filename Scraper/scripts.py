from Websites.Flipkart import FlipkartScraper
from Websites.HM import HMScraper
from Websites.Nike import NikeScraper
from Websites.Nykaa import NykaaScraper
from Websites.Puma import PumaScraper
from Websites.Snitch import SnitchScraper
#
a = HMScraper()
print(a.scrape("https://www2.hm.com/en_in/productpage.1200540001.html"))


# import requests
# from requests_html import HTMLSession
#
# url = "https://www2.hm.com/en_in/productpage.0970817018.html"
# #Heading-module--general__1cV9K ProductName-module--productTitle__3ryCJ Heading-module--small__6VQbz
# try:
#     session = HTMLSession()
#     response = session.get(url)
#     price = response.html.find("img")
#
#
#
#     print(price[1])
#
#
# except requests.exceptions.RequestException as e:
#     print(e)
