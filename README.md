# Simple Product API

A simple Node.js/Express service with product listing and cart calculation functionality.

## Features

- GET `/products` - Returns a list of available products
- POST `/cart` - Calculates total price for a product quantity

## Installation

1. Clone this repository
2. Run `npm install`
3. Run `npm start`

The server will start on http://localhost:3000

## API Endpoints

### GET /products

Returns a list of all available products.

Example response:
```json
[
    {
        "id": 1,
        "name": "Laptop",
        "price": 999.99
    },
    ...
]
```

### POST /cart

Calculate total price for a product.

Request body:
```json
{
    "productId": 1,
    "quantity": 2
}
```

Example response:
```json
{
    "productId": 1,
    "productName": "Laptop",
    "quantity": 2,
    "unitPrice": 999.99,
    "totalPrice": 1999.98
}
```
