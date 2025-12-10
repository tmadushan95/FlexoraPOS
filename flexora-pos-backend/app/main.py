from fastapi import FastAPI
from app.api.login_router import router as user_router

app = FastAPI(title="Clean Architecture FastAPI App")

app.include_router(user_router, prefix="/api/v1/users", tags=["users"])
