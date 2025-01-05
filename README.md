# Zomato Food Delivery App

This is a full-stack food delivery application built using the **MERN** stack (MongoDB, Express, React, Node.js). It allows users to browse a menu of food items, add them to their cart, place orders, and view their past orders.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Food Routes](#food-routes)
  - [Cart Routes](#cart-routes)
  - [Order Routes](#order-routes)
- [Frontend Pages & Routes](#frontend-pages--routes)
- [State Management (Context API)](#state-management-context-api)
- [Deployment](#deployment)
- [Additional Notes](#additional-notes)

## Project Overview

This application allows users to:

- Register and login.
- Browse and add food items to the cart.
- Place an order.
- View order history and status.
- Manage their cart.

## Features

- **User Authentication**: Register and login functionality.
- **Food Management**: View available food items, add new food, remove food.
- **Cart Functionality**: Add or remove items, view total cart value.
- **Order Management**: Place orders, view order history, manage order status.
- **Payment Options**: Cash on delivery (COD) and online payment.

## Technologies Used

- **Frontend**: React, Axios, React Router, Context API
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT-based token authentication
- **File Storage**: Multer (for handling image uploads)
- **Styling**: CSS (Tailwind CSS or custom)

## Setup Instructions

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/praveen00219/Zomato-Clone.git
   cd zomato-clone
   ```

## API Endpoints

#### Base URL:

**_The base URL for API requests is `https://zomato-clone-f9tb.onrender.com/api`._**

### User Routes

#### POST /user/register: Register a new user.

- **Request Body**:
  ```json
  { "username": "JohnDoe", "email": "john@example.com", "password": "password" }
  ```

#### POST /user/login: Login a user and obtain a JWT token.

- **Request Body**:
  ```json
  { "email": "john@example.com", "password": "password" }
  ```

#### Response:

```json
{ "token": "JWT_TOKEN" }
```

### Food Routes

#### GET /food/list: Get a list of all food items.

- **Request Body**:

  ```json
  [{ "id": 1, "name": "Pizza", "price": 299, "image": "image_url" }]
  ```

#### POST /food/add: Add a new food item.

- **Request Body**:

  ```json
  { "name": "Pizza", "price": 299, "image": "image_url" }
  ```

#### POST /food/remove: Remove a food item.

- **Request Body**:

  ```json
  { "foodId": 1 }
  ```

### Cart Routes

#### POST /cart/get: Get the user's current cart.

Request header: Authorization: Bearer <token>
Response:

- **Request Body**:

  ```json
  { "cartItems": { "1": 2, "3": 1 } }
  ```

#### POST /cart/add: Add a food item to the cart.

- **Request Body**:

  ```json
  { "itemId": "1" }
  ```

  Request header: Authorization: Bearer <token>

#### POST /cart/remove: Remove a food item from the cart.

- **Request Body**:
  ```json
  { "itemId": "1" }
  ```
  Request header: Authorization: Bearer <token>

### Order Routes

#### GET /order/list: Get all orders.

Request header: Authorization: Bearer <token>
Response:

- **Request Body**:

  ```json
  [{ "orderId": 1, "status": "Placed" }]


  ``
  ```

#### POST /order/place: Place a new order.

- **Request Body**:

  ```json
  { "cartItems": { "1": 2, "2": 1 }, "address": "123 Main St" }
  ```

  Request header: Authorization: Bearer <token>

#### POST /order/status: Update the order status.

- **Request Body**:
  ```json
  { "orderId": 1, "status": "Shipped" }
  ```
  Request header: Authorization: Bearer <token>

#### POST /order/verify: Verify an order.

- **Request Body**:
  ```json
  { "orderId": 1, "verificationCode": "1234" }
  ``
  Request header: Authorization: Bearer <token>
  ```

#### POST /order/placecod: Place an order with cash on delivery option.

- **Request Body**:

  ```json
  { "cartItems": { "1": 2, "3": 1 }, "address": "123 Main St" }
  ```

  Request header: Authorization: Bearer <token>

## Frontend Pages & Routes

- Home: Displays a list of food items available for order.
- Cart: Shows items that the user has added to the cart.
- Place Order: Page where users can place an order.
- My Orders: Displays a list of all past orders and their statuses.
- Verify: A page to verify the order's status.

### State Management (Context API)

- StoreContextProvider: Manages the state for food items, cart, and user authentication across the application.

### State Variables:

- food_list: List of available food items.
- cartItems: Items currently in the user's cart.
- token: JWT token for user authentication.

### Deployment

Backend, Frontend and Admin: Are hosted on Render. and accessible at here:

-**Backend**: https://zomato-clone-f9tb.onrender.com/ -**Frontend**:https://zomato-clone-frontend-9g69.onrender.com/ -**Admin**:https://zomato-clone-admin-jklc.onrender.com/

### Additional Notes

- MongoDB is used as the database, and MongoDB Atlas is used for cloud storage.
- Multer is used to handle food image uploads.
- JWT is used for user authentication and authorization.
- toastify is used for notifictions
- bcrypt

---

This complete section provides a well-structured overview of your API endpoints, frontend routes, state management, and other important details for your project. You can now copy and paste this into your `README.md` file for easy reference.

---
