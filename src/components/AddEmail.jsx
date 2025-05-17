import React from "react";
import Swal from "sweetalert2";

const AddEmail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newEmail = Object.fromEntries(formData.entries());
    console.log(newEmail);
    // sent data to the server.....
    fetch("http://localhost:3000/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("after adding emails to db", data);
          Swal.fire({
            title: "Email Added Successfully..",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white border border-green-400 p-8">
      <div className="w-full max-w-xl">
        <a href="#" className="text-purple-600 font-medium mb-4 inline-block">
          &laquo; All Users
        </a>
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          New User
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Use the below form to create a new account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          {/* photo url */}
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          {/* Gender */}
          <div className="flex items-center space-x-4 bg-white">
            <span className="text-gray-500 font-medium">Gender:</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="radio radio-sm text-green-600"
              />
              <span className="text-black">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="radio radio-sm text-green-600"
              />
              <span className="text-black">Female</span>
            </label>
          </div>

          {/* Status */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium">Status:</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Active"
                className="radio radio-sm text-green-600"
              />
              <span className="text-black">Active</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Inactive"
                className="radio radio-sm text-green-600"
              />
              <span className="text-black">Inactive</span>
            </label>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="btn w-full bg-green-400 hover:bg-green-500 text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmail;
