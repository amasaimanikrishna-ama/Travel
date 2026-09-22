from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from datetime import datetime
from app.core.database import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    booking_id = Column(Integer, ForeignKey("bookings.id"), nullable=False)
    transaction_id = Column(String, unique=True, nullable=True)
    payment_method = Column(String, default="stripe") # stripe, paypal, razorpay
    amount = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    status = Column(String, default="pending") # pending, success, failed
    created_at = Column(DateTime, default=datetime.utcnow)
