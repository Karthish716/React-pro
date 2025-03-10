import { useState } from "react";
import { useParams } from "react-router-dom";

function Post (){
    const {id} = useParams();

    const [post, setPost] = useState(null);

    fetch('http://localhost:3001/posts/'+id)
    .then(response=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        setPost(data);
    }).catch(err=>{
        console.log(err);
    });

    return(
        <div>
            {post && <div className='container m-5'>
            Post: {id}
            <h2>{post.title}</h2>
            <h4>{post.content}</h4>
         </div> }
        </div>
    );
}

export default Post;