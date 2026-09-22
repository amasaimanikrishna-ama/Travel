from sqlalchemy.orm import Session
from app.models.payment import Payment

class PaymentRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, payment_id: int):
        return self.db.query(Payment).filter(Payment.id == payment_id).first()
