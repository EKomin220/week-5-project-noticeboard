"use client"
import React from "react";
import { useState } from "react";

const Post = ({ username, post }) => {

  return (
    <div className={`flex flex-col gap-4 p-4 w-1/3 rounded-md shadow-md shadow-indigo-300`}>
      <h1>{username}</h1>
      <p>{post}</p>
    </div>
  );
};

export default Post;
