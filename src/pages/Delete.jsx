import { useNavigate, useParams } from 'react-router-dom';

function Delete() {

    const { userId } = useParams();
    console.log(userId)

    const navigate=useNavigate();

    function goBack()
    {
        navigate(-1);
    }

    function goToHome()
    {
      navigate("/home");
    }
      

    async function del()
    {
        try {
            const token=localStorage.getItem('x-auth-token');
            const response = await fetch(`/api/admin/delete?id=${userId}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if(response.status===200)
            {
                console.log("Delete Successful!")
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
    }


  return (
    <>
        <p>Are you sure want to delete</p>
        <button type="Submit" onClick={del}>YES</button>
        <button type="Submit" onClick={goBack}>NO</button>
    </>
  )
}

export default Delete