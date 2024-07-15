import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    const token=localStorage.getItem('x-auth-token');
    console.log("Protected");
    return token!=null? <Outlet></Outlet> : <Navigate to='/'></Navigate>
}

export default Protected;