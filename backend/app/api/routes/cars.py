from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.car import Car
from app.schemas.car import CarOut, CarCreate

router = APIRouter()

@router.get("/", response_model=List[CarOut])
def list_cars(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    return db.query(Car).offset(skip).limit(limit).all()

@router.get("/{id}", response_model=CarOut)
def get_car(id: int, db: Session = Depends(get_db)):
    car = db.query(Car).filter(Car.id == id).first()
    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    return car

@router.post("/", response_model=CarOut)
def create_car(car_in: CarCreate, db: Session = Depends(get_db)):
    car = Car(**car_in.dict())
    db.add(car)
    db.commit()
    db.refresh(car)
    return car
