import {Link } from 'react-router-dom'
import {auth} from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = ()=> {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth)    
    }

    return(
        <nav className="Navbar">
            <div>
                <Link to='/'>Home </Link>
                {!user ? <Link to='/login'>Login</Link> : <Link to='/createpost'>Create Post</Link>}
            </div>

            {user && (
                <>
                    <div className="login-info">
                        <p className="user-name">{user?.displayName}</p>
                        <img src={user?.photoURL || ""}  width='40px' height='40px' alt="" className="user-image" />
                        <button className='btn btn-light' onClick={signUserOut}>Log out</button>
                </div>
                </>
            )}
        </nav>
    )
}