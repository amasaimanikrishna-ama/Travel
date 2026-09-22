from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey
from app.core.database import Base

class Package(Base):
    __tablename__ = "packages"

    id = Column(Integer, primary_key=True, index=True)
    destination_id = Column(Integer, ForeignKey("destinations.id"), nullable=True)
    title = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=True)
    duration_days = Column(Integer, default=5)
    duration_nights = Column(Integer, default=4)
    price = Column(Float, nullable=False)
    image_url = Column(String, nullable=True)
