import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/s";
import type { MenuProps } from "antd";
import { Menu, Dropdown } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];
type MenuItemtwo = Required<MenuProps>["itemstwo"][number];

const itemstwo: MenuItemtwo[] = [
  {
    label: "Sicho Arena",
    key: "sa",
    icons: "../../public/logo/image.png",
  },
];
const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",

    style: { color: "white" },
  },

  {
    label: "Our Services",
    key: "services",

    style: { color: "white" },
  },

  {
    label: "Announcements",
    key: "annc",

    style: { color: "white" },
  },

  {
    label: "About",
    key: "about",
    style: { color: "white" },
  },

  {
    label: "Contact",
    key: "contact",

    style: { color: "white" },
  },
  {
    label: "Book Now",

    key: "booking",

    style: {
      color: "white",
      backgroundColor: "#6EC1E4",
    },
  },
  // {
  //   // label: "Login",
  //   key: "user",
  //   icon: <UserOutlined />,
  //   style: { color: "white" },
  // },
];

const itemsAuthentications: MenuItem[] = [
  {
    label: "Login",
    key: "login",
  },
  {
    label: "Registration",
    key: "reg",
  },
];

const TopMenu: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "about") {
      navigate("/about");
    } else if (e.key === "booking") {
      navigate("/booking");
    } else {
      navigate("/");
    }
  };

  const authenticationMenu = (
    <Menu
      items={itemsAuthentications}
      onClick={(e) => {
        setCurrent(e.key);
        if (e.key === "login") {
          navigate("/login");
        } else if (e.key === "reg") {
          navigate("/registration");
        }
      }}
    />
  );

  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      selectedKeys={[current]}
      className="p-6 items-center justify-end gap-4 bg-[#17295A] font-semibold"
    >
      {items.map((item) => (
        <Menu.Item key={item.key} style={item.style}>
          {item.label}
        </Menu.Item>
      ))}
      <Dropdown overlay={authenticationMenu} trigger={["click"]}>
        <Menu.Item
          key="user"
          icon={<UserOutlined />}
          style={{ color: "white" }}
        />
      </Dropdown>
    </Menu>
  );
};

export default TopMenu;
