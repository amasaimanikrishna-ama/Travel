from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.review import Review
from app.schemas.review import ReviewOut, ReviewCreate
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/{target_type}/{target_id}", response_model=List[ReviewOut])
def get_reviews(target_type: str, target_id: int, db: Session = Depends(get_db)):
    return db.query(Review).filter(Review.target_type == target_type, Review.target_id == target_id).all()

@router.post("/", response_model=ReviewOut)
def create_review(review_in: ReviewCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    review = Review(
        user_id=current_user.id,
        target_type=review_in.target_type,
        target_id=review_in.target_id,
        rating=review_in.rating,
        comment=review_in.comment
    )
    db.add(review)
    db.commit()
    db.refresh(review)
    return review
