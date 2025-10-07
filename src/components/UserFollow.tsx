import React, { useState } from "react";

function UserFollow() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((state) => !state);
  };

  return (
    <div className="bg-blue-950 rounded-xl shadow-lg p-6 w-[300px] text-center mx-auto mt-12">
      <img
        src="https://linefriendssquare.com/cdn/shop/files/MO_Brand_7e3677b0-038b-4b86-ae8a-203719f1fedd.jpg?v=1758005382"
        alt="Avatar"
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
       NCT
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-4">@nctdream</p>

      <button
        onClick={toggleFollow}
        className={`px-6 py-2 rounded-full font-semibold transition-colors ${
          isFollowing
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-white text-blue-950 hover:bg-blue-700"
        }`}
      >
        {isFollowing ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
}

export default UserFollow;
