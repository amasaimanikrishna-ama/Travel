from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ReviewCreate(BaseModel):
    target_type: str
    target_id: int
    rating: float
    comment: Optional[str] = None

class ReviewOut(BaseModel):
    id: int
    user_id: int
    target_type: str
    target_id: int
    rating: float
    comment: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True
