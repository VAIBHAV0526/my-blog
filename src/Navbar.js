import {Link ,useNavigate} from 'react-router-dom';
import useUser from './components/hooks/useUser';
import { getAuth,signOut } from 'firebase/auth';

function Navbar() {
    const {user}=useUser();
    const navigate=useNavigate();¸
    return (

        <nav>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
            </ul>

            <div className='nav-right'>
                {user ? <button  onClick={()=>{
                    signOut(getAuth());
                }}>logout</button>
                    : <button onClick={()=>{
                        navigate('/login');
                    }}>login</button>}

            </div>
        </nav>




    );

}
export default Navbar;