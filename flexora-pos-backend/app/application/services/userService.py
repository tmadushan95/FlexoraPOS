from app.application.repositories.interfaces.iUserRepository import IUserRepository
from app.application.services.interfaces.iUserService import IUserService
from app.entities.user import User

class UserService(IUserService):
    
    def __init__(self,repo:IUserRepository):
        self.repo = repo

    async def get_user_by_id(self, id: int) -> User:
        return await self.repo.get_user_by_id(id)