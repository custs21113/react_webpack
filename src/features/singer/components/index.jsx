import React, { Fragment, useState } from 'react'

export default function SingerBlock (props) {
    let { singer, getSinger, clearSingers } = props;
    return (
        <Fragment>
        <button onClick={getSinger}>异步获取网易云入驻歌手数据</button>
        <div>
            {singer?.map((item, index) => {
                return <li key={index}>{item.artistName}</li>
            })}
        </div>
        <button onClick={clearSingers}>清空reduxjs/toolkit使用axios从服务器上获取的数据</button>
        </Fragment>
    )
}