import { Post as IPost } from './main';

interface props{
    post: IPost;
}

export const Post = (props: props) => {
const {post} = props;

    return (
        <div className="Post">
            <p>{post.username}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    )
}