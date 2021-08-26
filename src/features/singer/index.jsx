import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getSinger, clearSingers } from '@/states/singerSlice';
import SingerBlock from './components';
export default function Counter() {
    let dispatch = useDispatch();
    const { singer } = useSelector((state) => state.singer);
    return (
        <Fragment>
            <SingerBlock singer={singer} getSinger={()=>dispatch(getSinger())} clearSingers={()=>dispatch(clearSingers())}></SingerBlock>
        </Fragment>
    )
}