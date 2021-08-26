import React, { Fragment, useState } from 'react'

export default function CounterBlock (props) {
    let {counter, decrement, increment} = props;
    return (
        <Fragment>
            <div>
                <button onClick={decrement}>decrement</button>{counter}<button onClick={increment}>increment</button>
            </div>
        </Fragment>
    )
}