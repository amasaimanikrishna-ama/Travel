from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import uuid
from app.core.database import get_db
from app.models.booking import Booking
from app.schemas.booking import BookingOut, BookingCreate
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/my-bookings", response_model=List[BookingOut])
def get_my_bookings(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(Booking).filter(Booking.user_id == current_user.id).all()

@router.post("/", response_model=BookingOut)
def create_booking(booking_in: BookingCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    ref = f"TRV-{uuid.uuid4().hex[:6].upper()}"
    booking = Booking(
        booking_reference=ref,
        user_id=current_user.id,
        booking_type=booking_in.booking_type,
        total_amount=booking_in.total_amount,
        start_date=booking_in.start_date,
        end_date=booking_in.end_date,
        status="confirmed"
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking
