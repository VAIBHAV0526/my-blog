import {useState,useEffect} from 'react';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const useUser = () => {
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);
    useEffect (() =>{
        const unsubsccribe=onAuthStateChanged(getAuth(),(user)=>{
            setuser(user);
            setloading(false);
        });
        return unsubsccribe;
    },[])
return {user,loading}
}
export default useUser;
