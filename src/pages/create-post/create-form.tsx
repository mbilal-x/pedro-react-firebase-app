import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '../../config/firebase'
import {  useAuthState } from 'react-firebase-hooks/auth'
// firestore
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
// redirect
import { useNavigate } from 'react-router-dom'


interface CreateFormData {
    title: string;
    description: string;
}


export const CreateForm = ()=> {

    const navigate = useNavigate()

    const postsRef = collection(db, "posts")
    const [user] = useAuthState(auth);


    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required')
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    const onCreateForm = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });
        console.log('Post created successfully')
        navigate('/')
    }

    return(
        <div className="CreatePost">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit(onCreateForm)}>
                <input type="text"  id="inputTitle" placeholder="Title..." {...register("title")}/>
                <p style={{color: 'red'}}>
                    {errors.title?.message}
                </p>
                <textarea  id="inputDescription" cols={3} placeholder="Description..." {...register("description")}></textarea>
                <p style={{color: 'red'}}>
                    {errors.description?.message}
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}