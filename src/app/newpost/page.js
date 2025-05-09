"use client";
import React from "react";
import { useState } from "react";

export default function addNewPost()  {

  const [postObject, setPostObject] = useState({
    username:"",
    post:"",
  })

  const handleInputChange = (event) => {
     
     const { name, value } = event.target;
     setPostObject({ ...postObject, [name]:value })
  }



  const handleSubmit = (event) => {

    event.preventDefault();

    const localStoragePosts = localStorage.getItem("posts");

    if (!postObject.username || !postObject.post){
      alert("Please provide your name and write your message.")
      return;
    }

    const postWithId = {... postObject, id: Date.now().toString()}

    if (localStoragePosts){
      localStorage.setItem("posts", JSON.stringify([ ...JSON.parse(localStoragePosts), postWithId]));
      resetPostObject();
     } else {
      localStorage.setItem("posts", JSON.stringify([postWithId]));
      resetPostObject();
    }

  }

  const resetPostObject = () => {
    setPostObject({
      username: "",
      post: "",
    });
  };

   //================================================//

  return (
    <div className="p-10 bg-gray-50">
      
      <form className="w-full max-w-3xl" 
            onSubmit= { handleSubmit } >
              
        <h1 className="text-xl font-bold text-indigo-950 my-10 md:ml-40"> Add a new post: </h1>      
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-indigo-800 font-semibold md:text-right mb-1 md:mb-0 pr-4"
                   id="post-username" 
            >
              Your Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-800"
              type="text"
              name="username"
              id="post-username"
              placeholder="Your name..."
              onChange= { handleInputChange }
              value={postObject.username}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-indigo-800 font-semibold md:text-right mb-1 md:mb-0 pr-4"
                    id="post-text">
              Your Post
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-800"
              type="text"
              name="post"
              id="post-text"
              placeholder="Type your message here..."
              onChange= { handleInputChange }
              value={postObject.post}
            />
          </div>
        </div>
        <div className="pt-5 sm:flex sm:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-indigo-950 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

