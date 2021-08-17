import { useState } from "react";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        const counterSize = parseInt(event.target.value);
        setSize(counterSize);
        props.updateCounterSize(counterSize);
    }

    return (
        <div>
            <span><strong>Size: </strong></span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;