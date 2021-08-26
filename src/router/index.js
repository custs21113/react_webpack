import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Home from '@/pages/home';
// const Home = lazy(()=> import('@/pages/home'));
const Message = lazy(() => import('@/pages/message'));
const Mine = lazy(() => import('@/pages/mine'));
const Dynamics = lazy(() => import('@/pages/dynamics'));
const Blackboard = lazy(() => import('@/pages/blackboard'));
//render: () => <Redirect to="/blackborad" />
const routes = [
    { path: '/', exact: true, render: () => <Redirect to="/home" /> },
    {
        path: '/home', component: Home
    },
    {
        path: '/blackboard', component: Blackboard
    },
    {
        path: '/message', component: Message
    },
    {
        path: '/dynamics', component: Dynamics
    },
    {
        path: '/mine', component: Mine
    }

]

export default routes;