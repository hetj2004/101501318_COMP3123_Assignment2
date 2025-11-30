# COMP3123 - Assignment 1 (Full Stack Development)

*Student Name:* Het Jasani 
*Student ID:* 101501318
*Course:* COMP3123 – Full Stack Development  
*Assignment:* RESTful API with MongoDB  
*College:* George Brown College  

---

## ✅ Project Description
This project is Assignment 1 for *COMP3123 – Full Stack Development. It is a RESTful API built using **Node.js, Express.js, and MongoDB Atlas*.  
The API includes:

✅ User Registration  
✅ User Login  
✅ Employee CRUD Operations  
✅ Input Validation  
✅ MongoDB Integration  
✅ Proper HTTP Status Codes  

---

## ✅ Technologies Used
| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ORM |
| bcrypt | Password hashing |
| JSON Web Token (JWT) | Authentication |
| Postman | API testing |
| Nodemon | Auto server restart |

---

## ✅ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd 101501318_COMP3123_Assignment1

2. Install dependencies
npm install

3. Create .env file

Create a .env file in the project root and add:

PORT=8081
MONGODB_URI=your-mongodb-connection-uri
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1d

4. Start the server
npm run dev


Server will run on
👉 http://localhost:8081

✅ API Endpoints
🔐 User Routes
Method	Endpoint	Description	Status Code
POST	/api/v1/user/signup	User Registration	201
POST	/api/v1/user/login	User Login	200
👨‍💼 Employee Routes
Method	Endpoint	Description	Status Code
GET	/api/v1/emp/employees	Get all employees	200
POST	/api/v1/emp/employees	Create new employee	201
GET	/api/v1/emp/employees/:eid	Get employee by ID	200
PUT	/api/v1/emp/employees/:eid	Update employee by ID	200
DELETE	/api/v1/emp/employees?eid=	Delete employee by ID	204
✅ Postman Collection

A Postman collection is included inside the .postman/ folder:

COMP3123_Assignment1.postman_collection.json

Import it into Postman to test the API.

✅ Screenshots Included

✅ User Signup (201)

✅ User Login (200)

✅ All Employee CRUD operations

✅ Validation error example (400)

✅ MongoDB Collections (users, employees)

✅ MongoDB Documents view

✅ Folder Structure
101501318_COMP3123_Assignment1/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .postman/
├── package.json
├── .env (not included)
└── README.md

✅ Author

Het Jasani
Student at George Brown College
Course: COMP3123 – Full Stack Development