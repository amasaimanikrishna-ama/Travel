from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.wishlist import Wishlist
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/")
def get_wishlist(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(Wishlist).filter(Wishlist.user_id == current_user.id).all()
