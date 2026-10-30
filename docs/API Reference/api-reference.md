

# Employee Management API Reference

## Overview

The Employee Management API enables developers to create,
retrieve, update, and delete employee records.

The API follows REST principles, uses standard HTTP methods,
and exchanges data in JSON format.

## Base URL

```text
https://api.example.com/v1
```

> **Note:** This is a fictional API created for
> documentation demonstration purposes.

## Authentication

All API requests require a valid API key.

Include the API key in the Authorization header:

```http
Authorization: Bearer YOUR_API_KEY
```

## Common Request Headers

| Header | Description | Required |
|---|---|---|
| Authorization | Bearer API key | Yes |
| Content-Type | application/json for requests with a JSON body | Conditional |
| Accept | application/json | Recommended |

---

## 1. Get All Employees

Retrieves a list of employee records.

### Endpoint

```http
GET /employees
```

### Query Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| department | string | No | Filters employees by department. |
| limit | integer | No | Maximum records returned. Default: 20. |
| offset | integer | No | Number of records to skip. Default: 0. |

### Example Request

```bash
curl -X GET \
  "https://api.example.com/v1/employees?department=Engineering&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Accept: application/json"
```

### Successful Response

**HTTP Status: 200 OK**

```json
{
  "total": 2,
  "limit": 10,
  "offset": 0,
  "employees": [
    {
      "id": 101,
      "name": "Ananya Sharma",
      "email": "ananya@example.com",
      "department": "Engineering"
    },
    {
      "id": 102,
      "name": "Rahul Mehta",
      "email": "rahul@example.com",
      "department": "Engineering"
    }
  ]
}
```

---

## 2. Get Employee by ID

Retrieves information about a specific employee.

### Endpoint

```http
GET /employees/{employeeId}
```

### Path Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| employeeId | integer | Yes | Unique employee identifier. |

### Example Request

```bash
curl -X GET \
  "https://api.example.com/v1/employees/101" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Successful Response

**HTTP Status: 200 OK**

```json
{
  "id": 101,
  "name": "Ananya Sharma",
  "email": "ananya@example.com",
  "department": "Engineering",
  "status": "Active"
}
```

### Error Response

**HTTP Status: 404 Not Found**

```json
{
  "error": {
    "code": "EMPLOYEE_NOT_FOUND",
    "message": "Employee with ID 101 was not found."
  }
}
```

---

## 3. Create an Employee

Creates a new employee record.

### Endpoint

```http
POST /employees
```

### Request Body Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| name | string | Yes | Full name of the employee. |
| email | string | Yes | Unique email address. |
| department | string | Yes | Department name. |
| status | string | No | Active or Inactive. Default: Active. |

### Example Request

```bash
curl -X POST \
  "https://api.example.com/v1/employees" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Priya Nair",
    "email": "priya@example.com",
    "department": "Finance",
    "status": "Active"
  }'
```

### Successful Response

**HTTP Status: 201 Created**

```json
{
  "id": 103,
  "name": "Priya Nair",
  "email": "priya@example.com",
  "department": "Finance",
  "status": "Active",
  "message": "Employee created successfully."
}
```

---

## 4. Update an Employee

Updates one or more fields of an existing employee record.

### Endpoint

```http
PATCH /employees/{employeeId}
```

### Example Request

```bash
curl -X PATCH \
  "https://api.example.com/v1/employees/103" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "department": "Human Resources"
  }'
```

### Successful Response

**HTTP Status: 200 OK**

```json
{
  "id": 103,
  "name": "Priya Nair",
  "email": "priya@example.com",
  "department": "Human Resources",
  "status": "Active"
}
```

---

## 5. Delete an Employee

Permanently deletes an employee record.

### Endpoint

```http
DELETE /employees/{employeeId}
```

### Example Request

```bash
curl -X DELETE \
  "https://api.example.com/v1/employees/103" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Successful Response

**HTTP Status: 204 No Content**

The server returns an empty response body.

---

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 OK | Request completed successfully. |
| 201 Created | Resource created successfully. |
| 204 No Content | Request completed with no response body. |
| 400 Bad Request | Request contains invalid input. |
| 401 Unauthorized | API key is missing or invalid. |
| 403 Forbidden | Access to the resource is denied. |
| 404 Not Found | Requested resource does not exist. |
| 409 Conflict | Resource conflicts with an existing record. |
| 429 Too Many Requests | API rate limit exceeded. |
| 500 Internal Server Error | Unexpected server error. |

## Error Response Format

Errors follow a consistent JSON structure.

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The email field must contain a valid address."
  }
}
```

## Best Practices

- Use HTTPS for all API requests.
- Store API keys securely and never commit them to GitHub.
- Validate request parameters before sending requests.
- Handle HTTP errors using status codes.
- Use pagination when retrieving large datasets.

## Support

For questions about this fictional API, refer to
the documentation examples in this portfolio.
