import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuItem = ({ key, path, label, ...rest }) => {
  return (
    <Menu.Item key={key} {...rest}>
      <Link to={path}>{label}</Link>
    </Menu.Item>
  );
};

export default MenuItem;
