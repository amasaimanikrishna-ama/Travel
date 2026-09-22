from sqlalchemy import Column, Integer, String, Text, Float
from app.core.database import Base

class Destination(Base):
    __tablename__ = "destinations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    country = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=True)
    image_url = Column(String, nullable=True)
    rating = Column(Float, default=4.8)
