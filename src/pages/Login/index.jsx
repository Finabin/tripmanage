import React, { useState } from "react";
import { Input, Button, message } from "antd";
import './index.scss';
import { useNavigate } from "react-router-dom";

export default function Login() {

  let navigate = useNavigate()

  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')

  function handleValidate() {
    console.log(nickName, password);
    if (nickName === '' || password === '') {
      message.error('用户名或密码不能为空')
      return false
    }
    return true
  }

  function Login() {
    const res = handleValidate()
    if (res) {
      navigate('/home')
    }
  }

  return (
    <div>
      {/* <div className="Login-BackGround"></div> */}
      <div className="Login-Box-Container">
        <div>Welcome Back!</div>
        <div>
          <Input placeholder="请输入你的用户名" value={nickName} onChange={(e) => { setNickName(e.target.value) }} />
        </div>
        <div>
          <Input placeholder="请输入你的密码" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div>
          <Button type="primary" onClick={Login}>登录</Button>
        </div>
      </div>
    </div>
  )
}