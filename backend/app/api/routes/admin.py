from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.api.deps import get_current_active_admin
from app.models.user import User
from app.models.booking import Booking
from app.models.car import Car

router = APIRouter()

@router.get("/stats")
def get_admin_stats(admin_user: User = Depends(get_current_active_admin), db: Session = Depends(get_db)):
    return {
        "total_users": db.query(User).count(),
        "total_bookings": db.query(Booking).count(),
        "total_cars": db.query(Car).count()
    }
