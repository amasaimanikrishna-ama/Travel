from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class BookingBase(BaseModel):
    booking_type: str = "car"
    total_amount: float
    start_date: datetime
    end_date: datetime

class BookingCreate(BookingBase):
    item_id: int

class BookingOut(BookingBase):
    id: int
    booking_reference: str
    user_id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
