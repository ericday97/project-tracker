import { Typography, Layout, Breadcrumb, theme, Space } from "antd";
import TopMenu from "../components/TopMenu";
import { Outlet } from "react-router-dom";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Space>
            <Title level={2}>Project Tracker</Title>
          </Space>
          <TopMenu />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
          />
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by One Line Away
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
