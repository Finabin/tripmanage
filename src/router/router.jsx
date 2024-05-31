import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import AuthRoute from '../components/AuthRoute'
import NotFound from '../pages/NotFound'
const Login = lazy(() => import('../pages/Login'));
const Main = lazy(() => import('../pages/Main'));
const My = lazy(() => import('../pages/My'));
const AttrManage = lazy(() => import('../pages/AttrManage'));
const AuditorManage = lazy(() => import('../pages/AuditorManage'));
const TravelManage = lazy(() => import('../pages/TravelManage'));
const UserManage = lazy(() => import('../pages/UserManage'));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          </AuthRoute>
        )
      },
      {
        path: 'attrmanage',
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <AttrManage />
            </Suspense>
          </AuthRoute>
        )
      },
      {
        path: 'auditormanage',
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <AuditorManage />
            </Suspense>
          </AuthRoute>
        )
      },
      {
        path: 'my',
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <My />
            </Suspense>
          </AuthRoute>
        )
      },
      {
        path: 'travel',
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <TravelManage />
            </Suspense>
          </AuthRoute>
        )
      },
      {
        path: 'user',
        element: (
          <AuthRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <UserManage />
            </Suspense>
          </AuthRoute>
        )
      },
    ]
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '*',
    element: <NotFound />
  }
])


export default router