"use client";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./components/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = localStorage.getItem("posts");

      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl p-4 border-3 border-indigo-500 rounded-md">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-3 bg-gray-50">
      <div className="flex flex-col items-center p-4 mt-4">
        <div>
          {posts.length === 0 ? (
            <div className="text-xl p-4"> No posts have been pinned yet...</div>
          ) : (
            /*  TODO: === debug this section ===
            <div>
              {posts.map((post) => {
                <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  post={post.post}
                />;
              })}
            </div>
          */
            <div>
              {" "}
              {posts.toReversed().map((post) => {
                return (
                  <div className="flex flex-col items-center p-2 mt-2 container">
                    {" "}
                    <div
                      className="flex flex-col items-left gap-3 px-4 rounded-sm shadow-sm shadow-indigo-900 bg-white container"
                      key={post.id}
                    >
                      {" "}
                      <span className="text-lg text-indigo-800 font-bold pt-2">
                        {" "}
                        📌 {post.username}{" "}
                      </span>{" "}
                      <br></br>
                      <span className="text-md"> {post.post} </span>{" "}
                      <br></br>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
