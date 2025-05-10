"use client"
import React from "react";

export default function Post (username, post) {

  return (
    <div className={`flex flex-col gap-5 p-5 w-1/3 rounded-md shadow-md shadow-indigo-300`}>
      <h1 className="text-xl font-bold p-2">{username}</h1>
      <p className="text-xl p-2">{post}</p>
    </div>
  );
};





