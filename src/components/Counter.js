import { useState } from "react";
import "../styles/Counter.css";

function Counter() {
    const [number, setNumber] = useState(0);

    function increase() {
        setNumber(number+1);
        console.log(number);
    }

    function decrease() {
        setNumber(number-1);
        console.log(number);
    }

    return (
        <div className="Counter">
            <button onClick={increase}>+</button>
            <span className="CounterNumber">{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;