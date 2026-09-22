from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Wishlist(Base):
    __tablename__ = "wishlists"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    item_type = Column(String, nullable=False) # car, package, experience
    item_id = Column(Integer, nullable=False)
