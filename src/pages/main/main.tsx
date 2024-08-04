import { db } from '../../config/firebase'
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { Post } from './post';

export interface Post {
    id: string;
    title: string;
    description: string;
    username: string;
    userId: string;
}


export const Main = ()=> {

    const [postList, setpostList] = useState<Post[] | null>()


    const getPosts = async () =>{
        const posts = await getDocs(collection(db, "posts"));
        setpostList(posts.docs.map(doc => ({...doc.data(), id: doc.id})) as Post[])
    }

    useEffect(() => {
        getPosts()
    }, [])

    return(
        <div className="Main">
            <h1>Home Page</h1>
            <div className='postListEl' >
                {postList?.map(post => (
                    <Post post={post}/>
                ))}
        </div>
        </div>
    );
}