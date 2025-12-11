from app.application.repositories.interfaces.iUserRepository import IUserRepository
from app.entities.user import User

class UserRepository(IUserRepository):

   # Constructor

   async def get_user_by_id(self, id: int) -> User:
      return User(id=id,name="Test 1")