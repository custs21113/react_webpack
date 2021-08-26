import React, { Fragment, useState, Suspense } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './index.scss';
import routes from '@/router';
export default function AppContent(props) {
    let [nav, setNav] = useState(["message", "blackboard", "home", "mine", "dynamics"]);
    return (
        <Fragment>
            <div className="app-content">
                <Suspense fallback={<h1>loading</h1>}>{/*fallback组件不可以懒加载最好给一下最大高度。*/}
                    {
                        renderRoutes(routes)
                    }
                </Suspense>
                <div className="nav-bar">
                    {
                        nav.map((item, index) => {
                            return (
                                <NavLink key={index} to={item} activeStyle={{ 'color': 'red' }}>{item}</NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}