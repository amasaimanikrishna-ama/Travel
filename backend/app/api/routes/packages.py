from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.package import Package
from app.schemas.package import PackageOut

router = APIRouter()

@router.get("/", response_model=List[PackageOut])
def list_packages(db: Session = Depends(get_db)):
    return db.query(Package).all()
