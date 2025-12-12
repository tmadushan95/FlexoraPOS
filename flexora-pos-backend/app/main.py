# app/main.py
from fastapi import FastAPI
from app.api.user_router import router as user_router
from contextlib import asynccontextmanager
from sqlmodel import SQLModel
from app.db.session import engine

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(lifespan=lifespan)

# Register routers
app.include_router(user_router, prefix="/api", tags=["Users"])
