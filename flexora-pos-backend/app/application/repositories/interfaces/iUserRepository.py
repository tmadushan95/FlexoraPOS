from abc import ABC,abstractmethod
from typing import List
from app.models.user import User

class IUserRepository(ABC):

    @abstractmethod
    def get_user_by_id(self,id:int)->User:
        pass

    @abstractmethod
    def get_all_users(self)->List[User]:
        pass