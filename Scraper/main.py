from fastapi import FastAPI

from Data import Data
from Websites.Flipkart import FlipkartScraper
from Websites.HM import HMScraper
from Websites.Nike import NikeScraper
from Websites.Nykaa import NykaaScraper
from Websites.Puma import PumaScraper
from Websites.Snitch import SnitchScraper


app = FastAPI()

d = {
    "nike": NikeScraper(),
    "h&m": HMScraper(),
    "flipkart": FlipkartScraper(),
    "nykaa": NykaaScraper(),
    "puma": PumaScraper(),
    "snitch": SnitchScraper()
}


@app.get("/")
async def home():

    return "hello world"



@app.post("/")
async def scrape(data : Data):
    url = data.url
    website = data.website.lower()
    scraper = d[website]
    product = scraper.scrape(url)
    return product


