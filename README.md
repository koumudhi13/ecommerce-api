# E-Commerce API

## Project Overview
This is a RESTful API for managing users, categories, and products in an e-commerce system.  
Users can register, login, and perform actions depending on their role (Admin/User). Admins can manage categories and products.

## Technology Stack
- Node.js, Express.js
- MySQL, Sequelize
- JWT Authentication

## Features
- User registration and login  
- Category CRUD (Admin only)  
- Product CRUD (Admin only)  
- Role-based access control

## API Endpoints

### Users
- *POST* /users/register – Register a new user  
- *POST* /users/login – Login user  
- *GET* /users – Get all users (Admin only)  

### Categories
- *POST* /categories – Create category (Admin only)  
- *GET* /categories – Get all categories  
- *PUT* /categories/:id – Update category (Admin only)  
- *DELETE* /categories/:id – Delete category (Admin only)  

### Products
- *POST* /products – Create product (Admin only)  
- *GET* /products – Get all products  
- *PUT* /products/:id – Update product (Admin only)  
- *DELETE* /products/:id – Delete product (Admin only)  

## Notes
- Users’ permissions depend on their role.  
- JWT tokens are used for authentication.
