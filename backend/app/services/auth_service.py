from sqlalchemy.orm import Session
from app.models.user import User
from app.core.security import get_password_hash, verify_password

class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def authenticate(self, email: str, password: str) -> User | None:
        user = self.db.query(User).filter(User.email == email).first()
        if not user or not verify_password(password, user.hashed_password):
            return None
        return user
