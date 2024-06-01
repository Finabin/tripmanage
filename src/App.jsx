import React from 'react'
// import router from './router/router'
import { RouterProvider } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider, theme, Layout } from 'antd'
import MyLayout from './pages/MyLayout'
// 设置中文
import zhCN from "antd/es/locale/zh_CN"
import { useSelector } from 'react-redux'
import './App.scss'
// import 




const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const dark = useSelector(state => state.dark.dark)
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: dark.isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}>
      <MyLayout style={{ minHeight: '100vh' }}>
        {/* <RouterProvider router={router}></RouterProvider> */}
        <Routes>
          {/* <Route path='/' element={}></Route> */}
        </Routes>
      </MyLayout>
    </ConfigProvider >
  )
}

export default App