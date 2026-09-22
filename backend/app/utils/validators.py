import re

def validate_phone(phone: str) -> bool:
    pattern = r"^\+?[1-9]\d{1,14}$"
    return bool(re.match(pattern, phone))
