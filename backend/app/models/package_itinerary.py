from sqlalchemy import Column, Integer, String, Text, ForeignKey
from app.core.database import Base

class PackageItinerary(Base):
    __tablename__ = "package_itineraries"

    id = Column(Integer, primary_key=True, index=True)
    package_id = Column(Integer, ForeignKey("packages.id"), nullable=False)
    day_number = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
