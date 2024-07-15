import {Link, useLocation } from 'react-router-dom';

function Details() {
    
    const location = useLocation();
    const { user } = location.state;

  return (
    <div>
        <h1>User Details</h1>
        <p>FirstName: {user.firstname}</p>
        <p>LastName: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <Link to={`/delete/${user.id}`} state={{ user }}>
            <button type='Submit'>Delete User</button>
        </Link>
    </div>
  )
}

export default Details