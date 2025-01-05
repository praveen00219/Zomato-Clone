# All Hosted Endpoints:

## API Endpoints

#### Backend Base URL:

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

## FrontEnd Site

#### FrontEnd URL:

**_The base URL for API requests is `https://zomato-clone-frontend-9g69.onrender.com/`._**

#### Admin URL:

**_The base URL for API requests is `https://zomato-clone-admin-jklc.onrender.com/`._**
