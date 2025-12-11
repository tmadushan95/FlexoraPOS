from abc import ABC,abstractmethod
from app.entities.user import User

class IUserRepository(ABC):

    @abstractmethod
    async def get_user_by_id(self,id:int)->User:
        pass