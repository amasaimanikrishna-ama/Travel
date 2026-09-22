from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import Base, engine
from app.api.routes import (
    auth, users, cars, bookings, payments, destinations,
    packages, experiences, reviews, wishlist, coupons,
    notifications, admin, health
)

# Initialize database tables (for development)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health.router, tags=["Health"])
app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["Auth"])
app.include_router(users.router, prefix=f"{settings.API_V1_STR}/users", tags=["Users"])
app.include_router(cars.router, prefix=f"{settings.API_V1_STR}/cars", tags=["Cars & Rentals"])
app.include_router(bookings.router, prefix=f"{settings.API_V1_STR}/bookings", tags=["Bookings"])
app.include_router(payments.router, prefix=f"{settings.API_V1_STR}/payments", tags=["Payments"])
app.include_router(destinations.router, prefix=f"{settings.API_V1_STR}/destinations", tags=["Destinations"])
app.include_router(packages.router, prefix=f"{settings.API_V1_STR}/packages", tags=["Tour Packages"])
app.include_router(experiences.router, prefix=f"{settings.API_V1_STR}/experiences", tags=["Experiences"])
app.include_router(reviews.router, prefix=f"{settings.API_V1_STR}/reviews", tags=["Reviews"])
app.include_router(wishlist.router, prefix=f"{settings.API_V1_STR}/wishlist", tags=["Wishlist"])
app.include_router(coupons.router, prefix=f"{settings.API_V1_STR}/coupons", tags=["Coupons & Discounts"])
app.include_router(notifications.router, prefix=f"{settings.API_V1_STR}/notifications", tags=["Notifications"])
app.include_router(admin.router, prefix=f"{settings.API_V1_STR}/admin", tags=["Admin Management"])

@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.PROJECT_NAME}",
        "docs": "/docs",
        "api_v1": settings.API_V1_STR
    }
