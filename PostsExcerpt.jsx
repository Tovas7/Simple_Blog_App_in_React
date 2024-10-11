import Author from "./Author";
import TimeAgo from "./TimeAgo";

import { Link } from "react-router-dom";

const PostsExcerpt = ({ post}) => {
  return (
    <article>
            <h3>{post.title}</h3>
            <p className="excerpt">{post.body.substring(0,75)}</p>
            <p>
            <Link  to={`post/${post.id}`}>View Post</Link>
              <Author userId={post.userId}/>
              <TimeAgo timestamp={post.date}/>
            </p>
        </article>
  )
}

export default PostsExcerpt