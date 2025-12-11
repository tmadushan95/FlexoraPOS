# app/main.py
from fastapi import FastAPI
from app.api.user_router import router as user_router

app = FastAPI(
    title="User Service",
    version="1.0.0",
    description="Clean architecture FastAPI service"
)

# Register routers
app.include_router(user_router, prefix="/api", tags=["Users"])
