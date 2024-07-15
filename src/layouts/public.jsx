import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
    const token=localStorage.getItem('x-auth-token');
    console.log("Public");
    return token==null? <Outlet></Outlet> : <Navigate to='/home'></Navigate>
}

export default Public;