from sqlalchemy.orm import Session
from app.models.car import Car

class CarRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, car_id: int):
        return self.db.query(Car).filter(Car.id == car_id).first()
