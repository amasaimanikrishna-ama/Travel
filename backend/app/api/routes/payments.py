from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import uuid
from app.core.database import get_db
from app.models.payment import Payment
from app.schemas.payment import PaymentOut, PaymentCreate

router = APIRouter()

@router.post("/process", response_model=PaymentOut)
def process_payment(payment_in: PaymentCreate, db: Session = Depends(get_db)):
    payment = Payment(
        booking_id=payment_in.booking_id,
        transaction_id=f"tx_{uuid.uuid4().hex[:12]}",
        amount=payment_in.amount,
        payment_method=payment_in.payment_method,
        currency=payment_in.currency,
        status="success"
    )
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment
