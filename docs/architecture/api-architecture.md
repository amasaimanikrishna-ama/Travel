# API Architecture & Conventions

All endpoints follow RESTful standards under the `/api/v1` namespace.

## Response Standards
- **Success Responses**: Returns JSON payload with HTTP 200/201.
- **Error Responses**: Standard RFC-7807 compliant error format with descriptive `detail` message and appropriate HTTP status codes (400, 401, 403, 404, 422, 500).
- **Authentication**: Bearer token schema using JSON Web Tokens (JWT) in the `Authorization: Bearer <token>` header.
