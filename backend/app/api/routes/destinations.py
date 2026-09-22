from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.destination import Destination
from app.schemas.destination import DestinationOut

router = APIRouter()

@router.get("/", response_model=List[DestinationOut])
def list_destinations(db: Session = Depends(get_db)):
    return db.query(Destination).all()
