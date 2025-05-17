import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import EmailsRow from "./EmailsRow";
import { FaUserPlus } from "react-icons/fa";

const Home = () => {
  const initialEmails = useLoaderData();
  // console.log(emails);
  const [emails, setEmails] = useState(initialEmails);
  return (
    <div className="min-h-screen bg-white border border-green-400 p-8">
      <div className="mb-5 text-center">
        <h1 className="text-green-600 font-bold text-2xl flex justify-center gap-1">
          <FaUserPlus className="text-green-600" size={30} />
          All Users Details
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table text-black font-semibold w-full">
          <thead className="bg-neutral text-white font-bold">
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {emails.map((user, index) => (
              <EmailsRow
                key={user._id}
                user={user}
                index={index}
                emails={emails}
                setEmails={setEmails}></EmailsRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* New User Button */}
      <div className="mb-4 mt-5">
        <Link to="/addEmail">
          <button className="btn btn-sm btn-outline btn-primary">
            <FaUserPlus className="mr-2" />
            Add New User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
