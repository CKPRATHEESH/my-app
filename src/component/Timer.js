import { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => setCount((count) => count + 1), 1000);
    });

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}
export default Timer;