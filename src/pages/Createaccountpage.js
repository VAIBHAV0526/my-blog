import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import  {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';

const CreateAccountPage =() =>
{ const [email ,setemail]=useState("");
const navigate=useNavigate();
    const [password,setpassword]=useState("");
  const [confirmpassword,setconfirpassword]=useState("");
  const [error,seterror]=useState("");
  const createaccount =async ()=> {
    try{
        if(password!=confirmpassword){
            seterror("passwords do not match");
        }
  
           await createUserWithEmailAndPassword(getAuth(),email,password)
            navigate("/articles")
    }
    catch(e){

        seterror(e.message);
    }
  }
    return (
        <>
<h1>create account</h1>
{error && <p className="error">{error}</p>}
<input
placeholder="email address"
value={email}
onChange={event =>setemail(event.target.value)}
/>
<input type="password"
placeholder="123456789"
value={password}
onChange ={event =>setpassword(event.target.value)}
/>
<input type="password"
placeholder="123456789"
value={confirmpassword}
onChange ={event =>setconfirpassword(event.target.value)}
/>
<button onClick={createaccount}> submit </button>
<Link to="/login">have a account</Link>

</>
    );
}
export default CreateAccountPage;