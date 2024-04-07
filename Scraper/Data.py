from pydantic import BaseModel



class Data(BaseModel):
    url: str = None
    website: str = None
