# Ecommerce API

## Project Overview
This is a backend REST API for managing an ecommerce system.  
It allows users to *register, login, manage categories and products*.

## Technology Stack
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JWT Authentication

## Features
  - User
  - Register (POST /users/register)
  - Login (POST /users/login)
  - Get all users (admin only) (GET /users)
- *Category*
  - Create category (admin only) (POST /categories)
  - Get all categories (GET /categories)
  - Update category (admin only) (PUT /categories/:id)
  - Delete category (admin only) (DELETE /categories/:id)
- *Product*
  - Create product (admin only) (POST /products)
  - Get all products (GET /products)
  - Update product (admin only) (PUT /products/:id)
  - Delete product (admin only) (DELETE /products/:id)