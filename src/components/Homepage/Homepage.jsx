import React, { useState } from "react";
import { Menu, Layout } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ErrorBoundary from "../utility/ErrorBoundary";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const { Content, Sider } = Layout;

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleClick = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={handleClick}
        style={{ width: "15vw", height: "100vh" }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[selectedMenu]}
        mode="inline"
      >
        <Menu.Item key="sub1" icon={<MailOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu
          key="sub2"
          icon={<AppstoreOutlined />}
          title="Navigation Two"
          onTitleClick={handleClick}
        >
          <Menu.Item key="1">
            {/* <Link to="/mywizard/add"> */}
            Add
            {/* </Link> */}
          </Menu.Item>
          <Menu.Item key="2">
            {/* <Link to="/mywizard/update"> */}
            Update
            {/* </Link> */}
          </Menu.Item>
          <Menu.Item key="3">
            {/* <Link to="/mywizard/view"> */}
            View
            {/* </Link> */}
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="sub3" icon={<SettingOutlined />}>
          Help
        </Menu.Item>
      </Menu>
    </>
  );
};

const Homepage = (props) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <MenuPage />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <ErrorBoundary>{props.children}</ErrorBoundary>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homepage;
