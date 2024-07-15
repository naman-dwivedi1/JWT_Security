import { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function Signup() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    function goToHome()
    {
      navigate("/home");
    }

    async function signin(data)
    {
        try {
            const response = await fetch(`/api/auth/authenticate`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(data)
            });

            const dat=await response.json();
            localStorage.setItem('x-auth-token',dat.token);
            localStorage.setItem('x-email',email);
            if(response.status===200)
            {
                console.log("Signin Successful!")
                goToHome();
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
        setEmail('')
        setPassword('')
    }

    async function handleSubmit(e) {
        
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        signin(formJson);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input type='email' name="email" placeholder='Enter your email' required autoComplete="off" value={email} onChange={handleEmailChange}/>
                    </label>
                    <br></br>
                    <label>
                        <input type='password' name="password" placeholder='Enter you password' required value={password} onChange={handlePasswordChange}/>
                    </label>
                    <br></br>
                    <button type='Submit'>Submit</button>
                </div>
            </form>
            <p>Create Account</p>
            <Link to="/"><button type='Submit'>Signup</button></Link>
        </div>
      )
}

export default Signup