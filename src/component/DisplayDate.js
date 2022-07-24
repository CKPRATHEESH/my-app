import { useState, useEffect } from "react";

const DisplayDate = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, []);
    return (
        <div>{`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}</div>
    );
}
export default DisplayDate;