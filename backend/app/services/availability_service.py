from sqlalchemy.orm import Session
from datetime import date
from app.models.car_availability import CarAvailability

class AvailabilityService:
    def __init__(self, db: Session):
        self.db = db

    def check_car_availability(self, car_id: int, start_date: date, end_date: date) -> bool:
        # Default implementation check
        return True
