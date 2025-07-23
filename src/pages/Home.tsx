import { GoogleLogin } from "../components/GoogleLogin";
import { useAtom } from "jotai";
import { userAtom } from "../state/auth";
import { Button, Typography, Avatar, Flex, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const Home = () => {
    const [user, setUser] = useAtom(userAtom);
    const navigate = useNavigate();
    
  return (
    <>
      <Card title="Project Tracker">
        {user ? (
          <Flex gap="middle">
            <Avatar src={user.picture} size={64} />

            <Flex align="start" vertical>
              <Text>{user.name}</Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {user.email}
              </Text>
            </Flex>

            <Flex vertical>
              <Button danger onClick={() => setUser(null)}>
                Sign out
              </Button>
              <Button onClick={() => navigate("/projects")}>
                View Projects
              </Button>
              <Button onClick={() => navigate("/add-project")}>
                Add Project
              </Button>
            </Flex>
          </Flex>
        ) : (
          <GoogleLogin />
        )}
      </Card>
    </>
  );
}

export default Home