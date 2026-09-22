from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.coupon import Coupon

router = APIRouter()

@router.get("/validate/{code}")
def validate_coupon(code: str, db: Session = Depends(get_db)):
    coupon = db.query(Coupon).filter(Coupon.code == code, Coupon.is_active == True).first()
    if not coupon:
        raise HTTPException(status_code=404, detail="Invalid or expired coupon")
    return coupon
