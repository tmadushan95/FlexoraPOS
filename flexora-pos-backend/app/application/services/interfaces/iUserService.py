from abc import ABC,abstractmethod
from app.models.user import User
from typing import List

class IUserService(ABC):

    @abstractmethod
    def get_all_users(self)->List[User]:
        pass
 
    @abstractmethod
    def get_user_by_id(self,id:int)->User:
        pass