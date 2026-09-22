from pydantic_settings import BaseSettings
from typing import List, Union
from pydantic import AnyHttpUrl, validator

class Settings(BaseSettings):
    PROJECT_NAME: str = "TravelEase API"
    ENVIRONMENT: str = "development"
    API_V1_STR: str = "/api/v1"
    
    SECRET_KEY: str = "default_secret_key_please_change"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    DATABASE_URL: str = "sqlite:///./travel.db"
    
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]

    STRIPE_SECRET_KEY: str = ""
    EMAILS_FROM_EMAIL: str = "no-reply@travelease.com"
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
