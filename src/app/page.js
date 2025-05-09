"use client"
import { useState } from "react"; 
import { useEffect } from "react";
import Post from "./components/Post";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
   
    const loadPosts = () => {

     const storedPosts = localStorage.getItem("posts")

      if(storedPosts){
       setPosts(JSON.parse(storedPosts))
       setLoading(false)
      }
    }

   loadPosts()
  }, [])
  
  if (loading){
    return(
    <div className=" m-50 p-6 rounded-md bg-blue-100">
      <h1>Page loading...</h1>
    </div>
    )}

    /* TODO: debug+ update div in ternary below with the Post
    
    <div>
        {posts?.map((post) => {
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            post={post.post}
          />
        })}
      </div>*/

  return (

    <div> 
     {posts?.length === 0 ? (
       <div> No posts have been pinned yet...</div>
     ):(
      <div> {posts?.map((post)=>{
        return <div key={post.id}>{post.username}<br></br>{post.post}<br></br></div>
      })}
      </div>
     )}
    </div>
    
  );
}
