# app/api/user_router.py
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.userSchema import UserSchema
from app.application.services.interfaces.iUserService import IUserService
from app.dependencies import get_user_service
from typing import List

router = APIRouter()

# ===========================
#          ENDPOINT
# ===========================

@router.get("/user", response_model= List[UserSchema])
async def get_all_user(service: IUserService = Depends(get_user_service)):
    user = service.get_all_users()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return [UserSchema.model_validate(u) for u in user]

@router.get("/user/{id}", response_model=UserSchema)
async def get_user_by_id(id: int, service: IUserService = Depends(get_user_service)):
    user = service.get_user_by_id(id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return UserSchema.model_validate(user)
