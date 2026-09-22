from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.core.database import Base

class BookingItem(Base):
    __tablename__ = "booking_items"

    id = Column(Integer, primary_key=True, index=True)
    booking_id = Column(Integer, ForeignKey("bookings.id"), nullable=False)
    item_type = Column(String, nullable=False) # car, package, addon
    item_id = Column(Integer, nullable=False)
    quantity = Column(Integer, default=1)
    unit_price = Column(Float, nullable=False)
