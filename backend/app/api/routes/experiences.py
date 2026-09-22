from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.experience import Experience

router = APIRouter()

@router.get("/")
def list_experiences(db: Session = Depends(get_db)):
    return db.query(Experience).all()
