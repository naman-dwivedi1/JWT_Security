import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
    const token=localStorage.getItem('x-auth-token');
    return token==null? <Outlet></Outlet> : <Navigate to='/home'></Navigate>
}

export default Public;