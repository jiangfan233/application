import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const Application = () => {
  return (
    <Layout>
      <Content className="bg-gray-300">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Application;
