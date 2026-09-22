from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from app.core.database import Base

class Car(Base):
    __tablename__ = "cars"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    brand = Column(String, index=True, nullable=False)
    model_year = Column(Integer)
    category_id = Column(Integer, ForeignKey("car_categories.id"), nullable=True)
    transmission = Column(String, default="Automatic")
    fuel_type = Column(String, default="Petrol")
    seating_capacity = Column(Integer, default=5)
    daily_price = Column(Float, nullable=False)
    is_available = Column(Boolean, default=True)
    primary_image = Column(String, nullable=True)
