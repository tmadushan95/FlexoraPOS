from fastapi import  Depends
from app.application.services.userService import UserService
from app.application.repositories.userRepository import UserRepository
from app.application.services.interfaces.iUserService import IUserService

# ===========================
#   REPOSITORY DEPENDENCY INJECTION
# ===========================
def get_user_repository() -> UserRepository:
    """Creates repository instance."""
    return UserRepository()

# ===========================
#   SERVICE DEPENDENCY INJECTION
# ===========================
def get_user_service(
    repo: UserRepository = Depends(get_user_repository)
) -> IUserService:
    """Inject repository into service."""
    return UserService(repo)
