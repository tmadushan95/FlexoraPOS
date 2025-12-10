from typing import List
from app.domain.models.user import User
from app.application.repositories.user_repository import UserRepository

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    def list_users(self) -> List[User]:
        return self.repo.get_all_users()

    def get_user(self, user_id: int) -> User:
        return self.repo.get_user_by_id(user_id)
