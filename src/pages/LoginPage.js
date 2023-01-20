import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage =() =>
{   const navigate=useNavigate();

    const [email, setusername] = useState("");
    const[password, setpassword] = useState("");
    const [error,seterror]=useState("");
    const login =async ()=> {
        try{
        await signInWithEmailAndPassword(getAuth(),email,password)
        navigate("/articles")
        }
    catch (error){
        seterror(error.message);
    }
}
return (
    <>
<h1>login</h1>
{error && <p className="error">{error}</p>}
<input
placeholder="email address"
value={email}
onChange={event =>setusername(event.target.value)}
/>
<input type="password"
placeholder="123456789"
value={password}
onChange ={event =>setpassword(event.target.value)}
/>
<button onClick={login}>login</button>
<Link to="/createaccount">create account</Link>

</>
);
}
export default LoginPage;