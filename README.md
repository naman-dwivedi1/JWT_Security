# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This simple react + springboot application is designed to implement and demonstrate jwt token security

Roles in application :
USER: can see all the other users
ADMIN: can see all the other users and can delete the user from database

Pages:
Signup : A new user can signup then he will be get a jwt token and will be redirected to the home page
Signin : A user can signin then he will be get a jwt token and will be redirected to the home page
Home : list of all other users (name)
Details : Detail of the particular user
Delete : to delete the user

Note : By default when user will register , user will get USER role , user's role can be changed through database directly

Signup :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/c737940f-db21-4eb0-afbd-0d9edc245be9">

Home :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/f8d1e845-10af-4d8a-bf39-3be904bf8c19">

Signin :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/618fba6b-cf60-48b9-bc44-3500ba1f9c3f">

Details :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/7a2575ac-9bed-4eab-aff9-5f1e16ed183f">

Delete :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/1cdf974a-d3b6-4fa4-9f4a-b5f4350dbc69">

As user role is USER he can only see and not delete if try then he will receive 403 error
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/b706a7ac-536a-4a74-8387-720ed0e1d979">

Database :
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/4af44134-f035-4420-b88b-25791c4cb157">

Changing user role from DATABASE
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/377ca203-33cc-4dad-bc0b-27ffa63e55e2">

As user is now ADMIN he can delete any other user
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/72c19ffb-4aa8-4503-87d6-e8a0d18809a3">






