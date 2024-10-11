import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react";
import { selectAllPosts , getPostsError , getPostsStatus, fetchPosts} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsBar = () => {

    const posts=useSelector(selectAllPosts);
    const postsStatus=useSelector(getPostsStatus);
    const error=useSelector(getPostsError);
    const dispatch =useDispatch();


    useEffect(() =>{
      if(postsStatus === 'idle'){
        dispatch(fetchPosts())
      }
    },[postsStatus,dispatch])
    let content;
    if(postsStatus === 'loading'){
      content = <p>Loading ...</p>
    }else if(postsStatus === 'succeeded'){
      const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
      content=orderedPosts.map(post => <PostsExcerpt  key={post.id} post={post}/>)
    }else if(postsStatus === 'failed'){
      content = <p>{error}</p>
    }

  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostsBar