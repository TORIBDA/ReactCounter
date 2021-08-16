import Counter from "./Counter";

function CounterGroup(props) {
    function generateCounterList() {
        //size in the input
        return new Array(props.counterSize).fill(Date.now);
    }

    const counterList = generateCounterList();

    return (
        <div>
            <strong>Current Counter Size:</strong> {props.counterSize}
            {counterList.map((item, index) => (
                <Counter key={item + index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;