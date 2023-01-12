import React, {useEffect, useState} from 'react';
import CounterResult from './CounterResult';
const Counter = () => {

    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter => counter + 1);
    }

    // mount fase
    useEffect(() => {
    }, []);
    // update fase
    useEffect(() => {
    }, [counter]);
    // unmount fase
    useEffect(() => {
        return function cleanup() {

        };
    }, []);


    return (
        <div>

                <h1>Counter</h1>
                <CounterResult amount={counter}/>
                <span>Increase counter here:</span>
                <button type="button" onClick={increaseCounter}>+1</button>

        </div>
    );
};

export default Counter;