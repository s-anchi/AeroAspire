##Markdown DOCS

##Food Reviews API (v1)

Base URL: `http://localhost:5000/api/v1`
home page:where new reviews can be added and reviews can be filtered using title of food, date of upload and status

POST/api/v1/reviews
To post new reviews

GET/api/v1/reviews
Fetch reviews with optional filters and pagination.

 Query Parameters

| page     | int    | 1       | Page number for pagination  |
| per_page | int    | 5       | Items per page              |
| status   | string | -       | Filter by review status     |
| title    | string | -       | Search by title substring   |

 Example Request
GET /api/v1/reviews?page=2&status=pending

JSON output
{
  "page": 2,
  "pages": 0,
  "per_page": 5,
  "reviews": [],
  "total": 0
}