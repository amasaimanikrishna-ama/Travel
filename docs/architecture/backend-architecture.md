# Backend Architecture

The backend is built with **FastAPI**, **SQLAlchemy ORM**, **Pydantic v2**, and **Python 3.11+**.

## Core Layers
1. **API Router Layer (`app/api/routes/`)**: Validates request inputs with Pydantic schemas and delegates to services.
2. **Service Layer (`app/services/`)**: Encapsulates business logic, transaction boundaries, and domain rules.
3. **Repository Layer (`app/repositories/`)**: Abstracts database queries and CRUD operations.
4. **Data Models (`app/models/`)**: SQLAlchemy declarative models defining database schema mappings.
