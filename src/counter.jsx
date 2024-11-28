import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Welcome to the class");
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        <p>{message}</p>
        <button onClick={()=>{setMessage("Welcome to the REACT class")}}>Change Message</button>
      </div>
    );
}