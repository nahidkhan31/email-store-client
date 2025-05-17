import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const EmailsRow = ({ user, index }) => {
  const { _id, name, email, gender, status, photo } = user;
  return (
    <tr className="">
      <td className="text-blue-600 font-medium">{index + 1}</td>

      {/* Photo Column */}
      <td>
        <img
          src={photo}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border"
        />
      </td>

      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>

      <td className="flex space-x-2 mt-3">
        <button className="btn btn-xs btn-outline text-purple-600">
          <FaEdit />
        </button>
        <button className="btn btn-xs btn-outline text-purple-600">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default EmailsRow;
