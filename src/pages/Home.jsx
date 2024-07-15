import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {

    async function getAllUsers()
    {
        const token=localStorage.getItem('x-auth-token');
        try {
            const response = await fetch(`/api/read`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if(response.status===200)
            {
                console.log("Successfuly getting all users!")
                const data=await response.json();
                return data;
            }
            else if(response.status===400)
            {
                console.log("Client Side Error")
            }
            else
            {
                console.log("Server Side Error")
            }
        } 
        catch (e) 
        {
            console.log("Error in signup function")
        }
    }

    const navigate=useNavigate();

    function logout()
    {
        localStorage.removeItem('x-auth-token');
        navigate('/');
        
    }

    const [data, setData] = useState(null);

    const retrieveData = async () => {
        try {
            const dat = await getAllUsers();
            setData(dat);
        } catch (error) {
            console.log("Error in retrieving users:", error);
        }
    };

    useEffect(() => {
        retrieveData();
    }, []);

    useEffect(() => {

    }, [data]);

    return (
        <div>
            <h2>Logged-in User: {localStorage.getItem('x-email')}</h2>
            <h2>User List</h2>
            {data ? (
                <ul>
                    {data.map((user, index) => (
                        (user.email!=localStorage.getItem('x-email')) ? <li key={index}>
                            <Link to={"/details"} state={{user}}>name:
                            {` ${user.firstname}`}
                            </Link>
                            <div style={{height:"10px"}}></div>
                        </li> :<></>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            <button type="Submit" onClick={logout}>Logout</button>
        </div>
    );
}

export default Home