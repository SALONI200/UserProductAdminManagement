# UserProductAdminManagement

A Node.js application using Express and MongoDB to manage user accounts and products with different access levels for admins and regular users.

Features
User Management: Users can sign up and sign in.
Admin Management: Only one admin can manage users and products.
Product Management: Users can add products, and the admin can display, update, or delete products.
Security: JSON Web Token (JWT) for authentication and authorization.

Usage
Start the server:
npm start
The server will start on http://localhost:5000 by default.


#Admin Endpoints

Create Admin Account
POST /api/admins/signup
Request body: { "username": "string", "password": "string" }
Response: { "message": "Admin account created" }

Update User
PUT /api/admins/users/:userId
Request body: { "username": "string", "password": "string" }
Response: { "message": "User updated" }

Delete User
DELETE /api/admins/users/:userId
Response: { "message": "User deleted" }

Add Product
POST /api/products
Request body: { "name": "string", "description": "string", "price": "number" }
Response: { "message": "Product added" }

Update Product
PUT /api/products/:productId
Request body: { "name": "string", "description": "string", "price": "number" }
Response: { "message": "Product updated" }

Delete Product
DELETE /api/products/:productId
Response: { "message": "Product deleted" }

List Products
GET /api/products
Response: [ { "id": "string", "name": "string", "description": "string", "price": "number" } ]

#User Endpoints
Sign Up
POST /api/users/signup
Request body: { "username": "string", "password": "string" }
Response: { "token": "jwt_token" }

Sign In
POST /api/users/signin
Request body: { "username": "string", "password": "string" }
Response: { "token": "jwt_token" }
