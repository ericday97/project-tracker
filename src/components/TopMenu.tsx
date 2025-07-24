import { GoogleLogin } from "./GoogleLogin";
import { useAtom } from "jotai";
import { userWithPersistenceAtom } from "../state/auth";
import { Button, Typography, Avatar, Flex, Menu, type MenuProps } from "antd";
import { FolderFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const TopMenu = () => {
  const [user, setUser] = useAtom(userWithPersistenceAtom);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const items: MenuItem[] = [
    {
      label: "Projects",
      key: "/projects",
      icon: <FolderFilled />,
    },
  ];

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        onClick={onClick}
      />
      {user ? (
        <>
          <Avatar src={user.picture} size={48} />
          <Flex align="start" vertical>
            <Text>{user.name}</Text>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {user.email}
            </Text>
          </Flex>
          <Button danger onClick={() => handleLogout()}>
            Sign out
          </Button>
        </>
      ) : (
        <GoogleLogin />
      )}
    </>
  );
};

export default TopMenu;
