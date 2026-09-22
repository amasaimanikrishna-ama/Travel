from sqlalchemy.orm import Session
from app.models.invoice import Invoice

class InvoiceService:
    def __init__(self, db: Session):
        self.db = db
