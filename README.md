# W08D03
Todos & Register & Login with  Token

## features:
- Authentication & Authorization
- register & login
- Todos

## Library:
- express
- mongoose
- bcrypt
- dotenv
- jsonwebtoken
- nodemon

## Schema:
1. Role
    ( role and permission )
2. User
   ( email , password and role )
3. Task
   ( name , isDel and useId )

## Routers:

1. Controllers

  - role.js 

  > getRoles
  > creatRole

  - task.js
```
 -  addNewTask, 
 -  getAllTasks, 
 -  getTaskById, 
 -  getUsertodo, 
 -  updateTask, 
 -  deleteTask, 
 -  deleteTaskByUser, 
```
  - user.js
```
 - register
 - login
 - getAllUsers
```
2. Midleware
```
  - authentication.js
  - authorization.js
```
3. Routes
```
  1. role.js 
  - post("/createRole")
  - get("/roles")

  2. task.js

  - post("/createTask")
  - get("/allTasks")
  - delete("/deltask/:id")
  - put("/updateTask/:id")
  - get("/getUsertodo/:user")
  - get("/task")
  - delete("/deleteTaskByUser/:id")

  3. user.js

  - post("/register")
  - post("/login")
  - get("/allusers")
```
## ER Diagram

![ERD1](https://user-images.githubusercontent.com/92247926/145243186-146915c9-2975-4cba-a82b-26092982b8d1.png)

## UML Diagram
![uml](https://user-images.githubusercontent.com/92247926/145261501-aa405930-e0e1-420c-9c65-020fe352d102.png)


