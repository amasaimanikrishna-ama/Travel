from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class CarImage(Base):
    __tablename__ = "car_images"

    id = Column(Integer, primary_key=True, index=True)
    car_id = Column(Integer, ForeignKey("cars.id"), nullable=False)
    image_url = Column(String, nullable=False)
    is_primary = Column(Integer, default=0)
