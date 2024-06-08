# AcademixPro

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#academixpro)

A simple Task Management System built with Node.js, Express, and Mongoose. This project demonstrates user authentication using sessions and CRUD operations for tasks.

## Prerequisites

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#prerequisites)

-   Node.js
-   MongoD
-   Postman (for testing the API)

## Getting Started

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#getting-started)

### 1. Clone the Repository

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#1-clone-the-repository)

git clone  [https://github.com/salmalah/AcademixPro.git](https://github.com/salmalah/AcademixPro.git)

```
cd AcademixPro

```

### 2. Install Dependencies

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#2-install-dependencies)

```
npm install

```

### 3. Set Up Environment Variables

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#3-set-up-environment-variables)

```
MONGO_URI=mongodb://localhost:27017/AcademixPro
SESSION_SECRET=your_session_secret

```

## API Endpoints

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#api-endpoints)

### User Endpoints

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#user-endpoints)

1.  **User Registration**
    
    -   **Endpoint:**  `/api/users/signup`
        
    -   **Method:**  `POST`
        
    -   **Description:**  Register a new user.
        
    -   **Body:**
        
        Copier le code
        
        ```
        {
          "username": "your_username",
          "email": "your_email@example.com",
          "password": "your_password"
        }
        
        
        ```
        
2.  **User Login**
    
    -   **Endpoint:**  `/api/users/login`
        
    -   **Method:**  `POST`
        
    -   **Description:**  Log in an existing user.
        
    -   **Body:**
        
        Copier le code
        
        ``` 
        {
          "email": "your_email@example.com",
          "password": "your_password"
        } 
          
   **Response:**
        
   Copier le code
        
       
        {
          "message": "Logged in successfully"
        } 
      
        
3.  **User Logout**
    
    -   **Endpoint:**  `/api/users/logout`
    -   **Method:**  `POST`
    -   **Description:**  Log out the current user.

### Task Endpoints

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#task-endpoints)

1.  **Create Task**
    
    -   **Endpoint:**  `/api/tasks`
        
    -   **Method:**  `POST`
        
    -   **Description:**  Create a new task.
        
    -   **Body:**
        
        Copier le code
        
        ```
        {
          "title": "Task Title",
          "description": "Task Description"
        }
        
2.  **Get All Tasks**
    
    -   **Endpoint:**  `/api/tasks`
    -   **Method:**  `GET`
    -   **Description:**  Get all tasks for the logged-in user.
3.  **Update Task**
    
    -   **Endpoint:**  `/api/tasks/:taskId`
        
    -   **Method:**  `PUT`
        
    -   **Description:**  Update an existing task.
        
    -   **Body (at least one field required):**
        
        Copier le code
        
        ```
        {
          "title": "Updated Task Title",
          "description": "Updated Task Description",
          "status": "completed"
        }
4.  **Delete Task**
    
    -   **Endpoint:**  `/api/tasks/:taskId`
    -   **Method:**  `DELETE`
    -   **Description:**  Delete an existing task.

## Testing with Postman

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#testing-with-postman)

1.  **Install Postman:**  Download and install Postman from  [Postman's official website](https://www.postman.com/downloads/).
    
2.  **Create a new Postman collection:**  Name it "Task Management System".
    
3.  **Add requests to the collection:**
    
    -   **User Registration:**
        
        -   **Method:**  `POST`
        -   **URL:**  `http://localhost:5000/api/users/signup`
        -   **Body:**  Select  `raw`  and  `JSON`  format, then add the registration payload.
    -   **User Login:**
        
        -   **Method:**  `POST`
        -   **URL:**  `http://localhost:5000/api/users/login`
        -   **Body:**  Select  `raw`  and  `JSON`  format, then add the login payload.
    -   **User Logout:**
        
        -   **Method:**  `POST`
        -   **URL:**  `http://localhost:5000/api/users/logout`
    -   **Create Task:**
        
        -   **Method:**  `POST`
        -   **URL:**  `http://localhost:5000/api/tasks`
        -   **Body:**  Select  `raw`  and  `JSON`  format, then add the task creation payload.
    -   **Get All Tasks:**
        
        -   **Method:**  `GET`
        -   **URL:**  `http://localhost:5000/api/tasks`
    -   **Update Task:**
        
        -   **Method:**  `PUT`
        -   **URL:**  `http://localhost:5000/api/tasks/:taskId`
        -   **Body:**  Select  `raw`  and  `JSON`  format, then add the task update payload.
    -   **Delete Task:**
        
        -   **Method:**  `DELETE`
        -   **URL:**  `http://localhost:5000/api/tasks/:taskId`

## Conclusion

[](https://github.com/salmalah/AcademixPro/blob/main/README.md#conclusion)

This README provides the necessary steps to set up and test the AcademixPro Task Management System. If you have any questions or issues, please feel free to contact me at [s.salmalahmidi@gmail.com](mailto:s.salmalahmidi@gmail.com)

**Propriétaire:**  Lahmidi Salma
