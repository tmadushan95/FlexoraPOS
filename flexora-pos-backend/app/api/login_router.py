from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.user_schema import UserResponse
from app.application.services.user_service import UserService
from app.infrastructure.db_implementation.user_repository_impl import UserRepositoryImpl

router = APIRouter()

# Dependency Injection
def get_user_service():
    repo = UserRepositoryImpl()
    return UserService(repo)

@router.get("/", response_model=List[UserResponse])
def list_users(service: UserService = Depends(get_user_service)):
    return service.list_users()

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, service: UserService = Depends(get_user_service)):
    user = service.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
