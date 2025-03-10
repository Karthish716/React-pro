import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

export const dataConstext = createContext();

function Home (){

    const navigate = useNavigate();
    const [posts, setPosts] = useState(null);
    const data = "DataData";

    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:3001/posts',{signal})
        .then(response=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data);
            setPosts(data);
        }).catch(err=>{
            console.log(err);
        });


//cleanup function
return ()=>{
    
    console.log('unMounted... Cleaning up');
    controller.abort();
}


    },[])
    return (
        <div className="container">
            {/* <Link to='/login'>Login</Link> */}
            <dataConstext.Provider value={data}>
            {/* <Login /> */}
            </dataConstext.Provider>
           
        <div className="row justify-content-center m-3">
            {posts && posts.map(post=>{
                return (
                    <div key={post.id} className="card m-3" style={{width: '18rem'}} onClick={()=>{navigate('/post/'+post.id)}}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
 
                        </div>
                    </div>
                )
            })}
            </div>    
        </div>
    );
}

export default Home;