from pydantic import BaseModel
from typing import Optional

class CarBase(BaseModel):
    name: str
    brand: str
    model_year: Optional[int] = 2024
    transmission: Optional[str] = "Automatic"
    fuel_type: Optional[str] = "Petrol"
    seating_capacity: Optional[int] = 5
    daily_price: float
    is_available: Optional[bool] = True
    primary_image: Optional[str] = None

class CarCreate(CarBase):
    pass

class CarUpdate(BaseModel):
    name: Optional[str] = None
    daily_price: Optional[float] = None
    is_available: Optional[bool] = None

class CarOut(CarBase):
    id: int

    class Config:
        from_attributes = True
