import { useState } from "react";

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
        <div>
            <button onClick={increase}>+</button>
            <span>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;