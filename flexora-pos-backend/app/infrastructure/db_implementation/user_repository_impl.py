from typing import List
from app.domain.models.user import User
from app.application.repositories.user_repository import UserRepository

class UserRepositoryImpl(UserRepository):
    def __init__(self):
        # Example: in-memory database
        self.users = [
            User(id=1, name="Alice", email="alice@example.com"),
            User(id=2, name="Bob", email="bob@example.com"),
        ]

    def get_all_users(self) -> List[User]:
        return self.users

    def get_user_by_id(self, user_id: int) -> User:
        return next((user for user in self.users if user.id == user_id), None)
