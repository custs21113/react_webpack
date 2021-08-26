import CounterBlock from './components';
import { decrement, increment } from '@/states/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

export default function Counter() {
    let dispatch = useDispatch();
    const { counter } = useSelector((state) => state.counter);
    const { singer } = useSelector((state) => state.singer);
    useEffect(() => {
    }, [singer])
    return (
        <Fragment>
            <CounterBlock decrement={() => dispatch(decrement(-1))} increment={() => dispatch(increment(1))} counter={counter} ></CounterBlock>
        </Fragment>
    )
}