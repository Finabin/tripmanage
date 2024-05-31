import React from "react";
import './index.scss'
import { Layout, Menu, Breadcrumb, Button } from 'antd';


export default function Main() {

  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Button>安全退出</Button>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="4">景点管理</Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  创作管理
                </span>
              }
            >
              <Menu.Item key="5">待审核</Menu.Item>
              <Menu.Item key="6">已审核</Menu.Item>
            </SubMenu>
            <Menu.Item key="7">景点管理</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}