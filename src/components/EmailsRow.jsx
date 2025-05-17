import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const EmailsRow = ({ user, index }) => {
  const { _id, name, email, gender, status, photo } = user;
  //   color
  const statusClass =
    status === "Active"
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // if you want to delete so data pass to the db
        fetch(`http://localhost:3000/emails/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
      <td className={statusClass}>{status}</td>

      <td className="flex space-x-2 mt-3">
        <Link to={`/emailDetails/${_id}`}>
          <button className="btn btn-xs btn-outline text-purple-600">
            <FaEye />
          </button>
        </Link>
        <Link to={`/updateEmail/${_id}`}>
          <button className="btn btn-xs btn-outline text-purple-600">
            <FaEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-outline text-purple-600">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default EmailsRow;
