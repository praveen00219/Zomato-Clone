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

#### Base URL: The base URL for API requests is https://zomato-clone-f9tb.onrender.com/api.

### User Routes

#### POST /user/register: Register a new user.

        ```bash
        { "username": "JohnDoe", "email": "john@example.com", "password": "password" }
        ```

#### POST /user/login: Login a user and obtain a JWT token

       ```bash
       { "email": "john@example.com", "password": "password" }
       ```
