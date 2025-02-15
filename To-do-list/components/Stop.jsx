import React, { useEffect, useState } from "react";

const Stop = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>Stopwatch: {time} seconds</h1>
        </div>
    );
};

export default Stop;
