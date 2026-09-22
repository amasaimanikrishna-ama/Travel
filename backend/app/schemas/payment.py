from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PaymentCreate(BaseModel):
    booking_id: int
    amount: float
    payment_method: str = "stripe"
    currency: str = "USD"

class PaymentOut(BaseModel):
    id: int
    booking_id: int
    transaction_id: Optional[str]
    amount: float
    currency: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
