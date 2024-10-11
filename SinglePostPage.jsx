    import { useSelector } from "react-redux";
    import { selectPostById } from "./postsSlice";
    import { useParams } from "react-router-dom";


    import Author from "./Author";
    import TimeAgo from "./TimeAgo";
    
    const SinglePostPage = () => {

        const { postId}= useParams();
        const post =useSelector((state) => selectPostById(state,Number(postId)));
        if(!post){
            return (
                <section>
                    <h2>Page Not Found!!</h2>
                </section>
              )
        }
     
        return( 
            <article>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0,100)}</p>
            <p>
              <Author userID ={post.userId}/>
              <TimeAgo timestamp={post.date}/>
            </p>
        </article>
        )
    }
    
    export default SinglePostPage