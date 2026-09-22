from enum import Enum

class RoleEnum(str, Enum):
    CUSTOMER = "customer"
    ADMIN = "admin"
    AGENT = "agent"

def check_is_admin(user_role: str) -> bool:
    return user_role == RoleEnum.ADMIN.value
