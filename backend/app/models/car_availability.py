from sqlalchemy import Column, Integer, Date, ForeignKey, Boolean
from app.core.database import Base

class CarAvailability(Base):
    __tablename__ = "car_availabilities"

    id = Column(Integer, primary_key=True, index=True)
    car_id = Column(Integer, ForeignKey("cars.id"), nullable=False)
    date = Column(Date, nullable=False)
    is_available = Column(Boolean, default=True)
