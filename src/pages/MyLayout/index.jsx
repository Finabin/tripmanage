import React, { useState } from "react";
import './index.scss'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { useNavigate } from "react-router";



export default function MyLayout() {

  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate()

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Button>安全退出</Button>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }} trigger={null} collapsed={collapsed} collapsible>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={({ key }) => {
              navigate(key)
            }}
            items={[
              {
                key: '/admin',
                // icon: 'user',
                label: '用户管理',
              },
              {
                key: '/travel',
                // icon: 'video-camera',
                label: '创作管理',
                children: [
                  {
                    key: '/travel/audit',
                    label: '待审核',
                  },
                  {
                    key: '/travel/pass',
                    label: '已审核',
                  }
                ]
              },
              {
                key: '/attr',
                // icon: 'upload',
                label: '景点管理',
              },
              {
                key: '/auditor',
                // icon: 'upload',
                label: '审核员管理',
              }
            ]}
          />
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}