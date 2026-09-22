from sqlalchemy.orm import Session
from app.models.booking import Booking

class BookingRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, booking_id: int):
        return self.db.query(Booking).filter(Booking.id == booking_id).first()
