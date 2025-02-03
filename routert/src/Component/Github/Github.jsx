import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/rampatil119")
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []); // Runs only once when the component mounts

    return (
        <div className="bg-gray-700 text-center m-4 text-white p-4 text-3xl">
            Github Followers: {data.followers}
            <img 
                        src={data.avatar_url} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full border-4 border-white"
                    />
        </div>
    );
}

export default Github;

export const githubInfoLoader =async ()=>{
    const response =await fetch ('https://api.github.com/users/rampatil119')
    return response.json()
}