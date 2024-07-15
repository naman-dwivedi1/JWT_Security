This simple react + springboot application is designed to implement and demonstrate Authentication and Authorization and jwt token security <br>
<br>
Roles in application : <br>
USER: can see all the other users <br>
ADMIN: can see all the other users and can delete the user from database <br>
<br>
Pages:
Signup : A new user can signup then he will be get a jwt token and will be redirected to the home page <br>
Signin : A user can signin then he will be get a jwt token and will be redirected to the home page <br>
Home : list of all other users (name) <br>
Details : Detail of the particular user <br>
Delete : to delete the user <br>
<br>
Note : By default when user will register , user will get USER role , user's role can be changed through database directly <br>
<br>
Signup :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/adea34bb-9816-4250-be46-bb5469aaf590">
<br>
Home :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/c5839f7d-5fe0-409d-ae8c-5ba5503728f4">
<br>
Signin :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/30282bb9-5038-406d-b541-82c50d846eb4">
<br>
Details :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/d67704ba-476c-4c60-8be8-f07357452037">
<br>
Delete :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/bde7c8ab-f54b-4b49-97f8-dbf032485414">
<br>
As user role is USER he can only see and not delete if try then he will receive 403 error
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/8a3a58e2-7506-415e-b4af-c08e3c318dea">
<br>
Database :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/37c4564a-ede8-4b9d-984d-0dd300aed96d">
<br>
Changing user role from DATABASE
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/63103b6e-fe6a-4f93-b22f-be24d49f1e85">
<br>
As user is now ADMIN he can delete any other user
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/72c19ffb-4aa8-4503-87d6-e8a0d18809a3">






