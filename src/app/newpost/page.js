"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  return (
    <div className="p-10 bg-gray-50">
      <h1 className="text-xl font-bold text-indigo-950 my-10"> Add a new post: </h1>
      <form className="w-full max-w-sm" /*onSubmit= { handleSubmit } */>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-indigo-800 font-semibold md:text-right mb-1 md:mb-0 pr-4">
              Your Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-800"
              name="name"
              placeholder="Your name..."
              /*onChange= { handleInputChange }*/
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-indigo-800 font-semibold md:text-right mb-1 md:mb-0 pr-4">
              Your Post
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-indigo-800"
              name="post"
              placeholder="Type your message here..."
              /*onChange= { handleInputChange }*/
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

export default page;
