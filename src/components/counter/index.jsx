import React, { Fragment, useState } from 'react'

export default function Counter (props) {
    //测试，不使用redux的计数器组件
    let [counter, setCounter] = useState(0);
    let decrement = () => {
        setCounter(counter-1)
    }
    let increment = () => {
        setCounter(counter+1)
    }
    return (
        <Fragment>
            <div>
                <span>
                测试，不使用redux的计数器组件
                </span>
                <button onClick={decrement}>decrement</button>{counter}<button onClick={increment}>increment</button>
            </div>
        </Fragment>
    )
}