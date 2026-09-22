from pydantic import BaseModel
from typing import Optional

class PackageBase(BaseModel):
    title: str
    description: Optional[str] = None
    duration_days: int = 5
    duration_nights: int = 4
    price: float
    image_url: Optional[str] = None
    destination_id: Optional[int] = None

class PackageCreate(PackageBase):
    pass

class PackageOut(PackageBase):
    id: int

    class Config:
        from_attributes = True
