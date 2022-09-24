import React, { Fragment } from "react";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogItem = ({ id, title, date, image }) => {
  return (
    <Fragment>
      <li
        key={id}
        className="m-2  flex flex-col bg-white rounded-3xl  shadow-md"
      >
        <div className="py-2 px-2">
          <div className="w-full p-1 ">
            <img
              className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
              src={image}
              alt="real estate"
            />
          </div>
          <div className="font-Poppins pl-1">
            <div className="flex  text-xs py-1 text-ash">
              <FiClock className="mr-2" /> <p>{date}</p>
            </div>
            <h1 className="text-base">{title}</h1>
          </div>
          <div className="pl-1 my-2">
            <Link to={`/blog/${id}`}>
              <button className=" bg-blue text-white font-bold text-xs px-3 py-2 rounded-lg shadow-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default BlogItem;
