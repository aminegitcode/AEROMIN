import React, { useState, useEffect } from "react";
import ProfileImageInput from "./ProfileImageInput";
import Swal from "sweetalert2";
import profile from "../../assets/profile.png";
function Profile({ profileImage, setProfileImage }) {
  // default values
  const defaultProfile = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    profileImage: profile,
  };

  // --- state ---
  const [firstName, setFirstName] = useState(
    () => localStorage.getItem("firstName") || defaultProfile.firstName
  );
  const [lastName, setLastName] = useState(
    () => localStorage.getItem("lastName") || defaultProfile.lastName
  );
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || defaultProfile.username
  );
  const [email, setEmail] = useState(
    () => localStorage.getItem("email") || defaultProfile.email
  );

  const [preview, setPreview] = useState(profileImage);


  {
  }
  const handleSave = (e) => {
    /*check if the email is valid*/
    e.preventDefault();

    const emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    setProfileImage(preview);
    localStorage.setItem("profileImage", preview);

    Swal.fire({
      title: "Succes",
      text: "Profile saved successfully !",
      icon: "success",
    });
  };

  // delete
  const handleReset = () => {
    setFirstName(defaultProfile.firstName);
    setLastName(defaultProfile.lastName);
    setUsername(defaultProfile.username);
    setEmail(defaultProfile.email);
    setProfileImage(defaultProfile.profileImage);
    setPreview(defaultProfile.profileImage);

    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("profileImage");
    Swal.fire({
      title: "Succes",
      text: "Profile reset successfully !",
      icon: "success",
    });
  };

  return (
    <div className="w-full ">
      <ProfileImageInput
        setImageProfile={setProfileImage}
        preview={preview}
        setPreview={setPreview}
      />
      <div className="w-full h-[2px] bg-gray-200 my-5"></div>
      <form className=" w-full">
        <div className="grid grid-cols-1 gap-x-40 w-full  gap-y-5 sm:px-10 px-3 sm:grid-cols-2">
          {/* first Name */}

          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>

          {/* last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>

          {/* username */}
          <div className="sm:col-span-2">
            <label
              htmlFor="username"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>

          {/* email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>

          {/* buttons */}
          <div className="mt-5 flex gap-4">
            <button
              type="submit"
              onClick={handleSave}
              className=" rounded-md w-40 bg-purple-600 px-3 py-2 text-center text-md font-semibold text-white shadow-xs hover:bg-purple-500   "
            >
              Update profile
            </button>
            <button
              type="button"
              onClick={handleReset}
              className=" rounded-md bg-gray-100 px-3 py-2 text-center text-md font-semibold text-gray-500 shadow-xs hover:bg-gray-200 "
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
