from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey
from app.core.database import Base

class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    destination_id = Column(Integer, ForeignKey("destinations.id"), nullable=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    duration_hours = Column(Float, default=3.0)
    image_url = Column(String, nullable=True)
