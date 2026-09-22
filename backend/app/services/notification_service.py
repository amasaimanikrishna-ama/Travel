from sqlalchemy.orm import Session
from app.models.notification import Notification

class NotificationService:
    def __init__(self, db: Session):
        self.db = db
