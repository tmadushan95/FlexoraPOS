from fastapi import  Depends
from app.application.services.userService import UserService
from app.application.repositories.userRepository import UserRepository
from app.application.services.interfaces.iUserService import IUserService
from app.db.session import get_session
from sqlmodel import Session

# ===========================
#   REPOSITORY DEPENDENCY INJECTION
# ===========================
def get_user_repository(session:Session=Depends(get_session)) -> UserRepository:
    """Creates repository instance."""
    return UserRepository(session)

# ===========================
#   SERVICE DEPENDENCY INJECTION
# ===========================
def get_user_service(
    repo: UserRepository = Depends(get_user_repository)
) -> IUserService:
    """Inject repository into service."""
    return UserService(repo)
