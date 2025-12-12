from pydantic_settings  import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = (
        "mssql+pyodbc://user:Password@Server/DB"
        "?driver=ODBC+Driver+17+for+SQL+Server"
    )

    class Config:
        env_file = ".env"
        env_file_encording = "utf-8"

settings = Settings()