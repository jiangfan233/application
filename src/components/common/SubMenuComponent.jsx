import MenuItem from "./MenuItem";
import { Menu } from "antd";

const { SubMenu } = Menu;

const SubMenuComponent = ({
  key,
  title,
  itemList,
  current,
  ...rest
}) => {
  return (
    <SubMenu key={key} title={title} {...rest}>
      {itemList.map((item) => (
        <MenuItem
          key={item.key}
          label={item.label}
          path={item.path}
          current={current}
        />
      ))}
    </SubMenu>
  );
};

export default SubMenuComponent;
