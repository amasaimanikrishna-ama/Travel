from sqlalchemy.orm import Session
from app.models.car import Car

class CarService:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self, skip: int = 0, limit: int = 100):
        return self.db.query(Car).offset(skip).limit(limit).all()
