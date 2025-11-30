# COMP3123 - Assignment 2
Employee Management System (MERN Stack)

## Student Information
Name: Het Jasani  
Student ID: 101501318  
Course: COMP3123  

## Project Description
This is a full-stack Employee Management System built using:
- MongoDB
- Express.js
- React.js
- Node.js

It supports:
- User Signup & Login (JWT Authentication)
- Add, View, Update, Delete Employees
- Upload Employee Profile Pictures
- Search Employees by Department & Position

---

## How to Run the Project

### Backend
cd backend
npm install
npm start

Server runs on:
http://localhost:8081

---

### Frontend
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

---

## API Endpoints

### User APIs
POST /api/v1/user/signup  
POST /api/v1/user/login  

### Employee APIs
POST /api/v1/emp  
GET /api/v1/emp  
GET /api/v1/emp/:id  
PUT /api/v1/emp/:id  
DELETE /api/v1/emp/:id  

---

## Features Implemented
- JWT Authentication
- Image Upload with Multer
- MongoDB Atlas Integration
- Full CRUD Operations
- Search & Filter Employees

---

## Tools Used
- Node.js
- Express.js
- MongoDB Atlas
- React.js
- Postman
- GitHub
