import React from "react";
import { FaBackward, FaUserPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const EmailDetails = () => {
  const { _id, name, email, gender, status, photo } = useLoaderData();
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{gender}</h1>
      <h1>{status}</h1>
      <img className="rounded-full w-20 h-20" src={photo} alt={name} />
      <div className="mb-4 mt-5">
        <Link to="/">
          <button className="btn btn-sm btn-outline btn-primary">
            <FaBackward className="mr-2" />
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmailDetails;
