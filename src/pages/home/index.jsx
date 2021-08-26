import React, { Fragment } from 'react'
import Singer from '@/features/singer';
import Counter from '@/features/counter';
import './index.scss';
export default function Home(props) {

    return (
        <Fragment>
            <div className="home">
                Home
                <Singer>

                </Singer>
                <Counter></Counter>
            </div>
        </Fragment>
    )
}