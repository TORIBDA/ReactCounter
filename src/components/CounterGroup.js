import Counter from "./Counter";

function CounterGroup(props) {
    function generateCounterList() {
        //size in the input
        return new Array(props.counterSize).fill(Date.now);
    }

    const counterList = generateCounterList();

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}></Counter>
            ))}
            Current Counter Size: {props.counterSize}
        </div>
    );
}

export default CounterGroup;