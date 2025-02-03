import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();  // Access the dynamic route param
    return (
        <div className="bg-gray-600 text-white text-3xl p-5">
            User: {userid}  {/* Display the dynamic user id */}
        </div>
    );
}

export default User;
