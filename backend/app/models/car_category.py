from sqlalchemy import Column, Integer, String
from app.core.database import Base

class CarCategory(Base):
    __tablename__ = "car_categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    slug = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)
