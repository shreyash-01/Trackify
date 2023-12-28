
class Product:
    def __init__(self, name: str, price: int, url: str, image_url: str, time: str, website: str):
        self.name = name
        self.price = price
        self.url = url
        self.imageurl = image_url
        self.time = time
        self.website = website

    def __str__(self):
        return f"name: {self.name}, price: {self.price}, url: {self.url}, imageurl: {self.imageurl}, time: {self.time}, website: {self.website}"
