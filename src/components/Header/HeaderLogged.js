import React from "react";

//Antd
import { Avatar, Dropdown, Menu } from "antd";

//ICon
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeaderLogged = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);
  const handleLogOut = () => {
    console.log('handleLogOut');
  }

  const menu = (
    <Menu>
      <Menu.Item>Thông tin cá nhân</Menu.Item>
      <Menu.Item>Danh sách khóa học</Menu.Item>
      <Menu.Item>Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <>
      {!!isLoggedIn ? (
        <Dropdown overlay={menu}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      ) : (
        <Link to="login">
          <Avatar icon={<UserOutlined />} />
        </Link>
      )}
    </>
  );
};

export default HeaderLogged;
