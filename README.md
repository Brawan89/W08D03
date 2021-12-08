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
  - role and permission.
2. User
  - email , password and role.
3. Task
  - name , isDel and useId.

## Routers:

1. Controllers

  - role.js 

  > getRoles
  > creatRole

  - task.js

  > addNewTask
  > getAllTasks
  > getTaskById
  > getUsertodo
  > updateTask
  > deleteTask
  > deleteTaskByUser

  - user.js

 > register
 > login
 > getAllUsers

2. Midleware

  - authentication.js
  - authorization.js

3. Routes
  - role.js 
  > post("/createRole")
  > get("/roles")

  - task.js

  > post("/createTask")
  > get("/allTasks")
  > delete("/deltask/:id")
  > put("/updateTask/:id")
  > get("/getUsertodo/:user")
  > get("/task")
  > delete("/deleteTaskByUser/:id")

  - user.js

  > post("/register")
  > post("/login")
  > get("/allusers")

## ER Diagram
