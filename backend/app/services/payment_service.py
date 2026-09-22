from sqlalchemy.orm import Session
from app.models.payment import Payment

class PaymentService:
    def __init__(self, db: Session):
        self.db = db
