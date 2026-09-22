from pydantic import BaseModel
from typing import Optional

class DestinationBase(BaseModel):
    name: str
    country: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    rating: Optional[float] = 4.8

class DestinationCreate(DestinationBase):
    pass

class DestinationOut(DestinationBase):
    id: int

    class Config:
        from_attributes = True
