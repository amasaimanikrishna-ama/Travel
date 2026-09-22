from sqlalchemy.orm import Session
from app.models.booking import Booking

class BookingService:
    def __init__(self, db: Session):
        self.db = db
