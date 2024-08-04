import { auth, provider} from '../config/firebase'
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom'



export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate('/')
    }


    return(
        <div className="Login">
            <h1>Login Page</h1>
            <p>Sign In with Google to continue</p>
            <button className='btn btn-dark' onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}