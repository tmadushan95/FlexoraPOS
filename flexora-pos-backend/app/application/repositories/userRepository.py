from typing import List
from app.application.repositories.interfaces.iUserRepository import IUserRepository
from app.models.user import User
from sqlmodel import Session, select

class UserRepository(IUserRepository):

   # Constructor
   def __init__(self, session: Session):
        self.session = session

   def get_all_users(self) -> List[User]:
      return self.session.exec(select(User)).all()

   def get_user_by_id(self, id: int) -> User:
      return self.session.get(User,id)