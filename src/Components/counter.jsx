import React, {useState} from 'react';

const Counter = () => {
    const [count, countSet] = useState(0)

    function increment() {
        countSet(count + 1)
    }

    function decrement(){
        countSet(count - 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Лайк</button>
            <button onClick={decrement}>Дизлайк</button>
        </div>
    )
}

export default Counter;