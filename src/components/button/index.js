import React, { Fragment } from 'react'
export default function Button(props) {

    return (
        <Fragment>
            <button>
                {
                    props.children
                }
            </button>
        </Fragment>
    )
}