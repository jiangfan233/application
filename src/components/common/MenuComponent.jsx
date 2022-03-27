import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MenuItem from "./MenuItem";
import SubMenuComponent from "./SubMenuComponent";
import { UserNavBarData } from "/fakeData/fakeNavBarData";

const MenuComponent = () => {
  const renderMenuItemByType = (menuItem) => {
    switch (menuItem.type) {
      case "subMenu":
        return (
          <SubMenuComponent
            key={menuItem.key}
            title={menuItem.title}
            itemList={menuItem.children}
            icon={<DownOutlined />}
          />
        );
      default:
        return (
          <MenuItem
            key={menuItem.key}
            label={menuItem.label}
            path={menuItem.path}
          />
        );
    }
  };

  const renderMenuItems = (menuItemList) => {
    return menuItemList.map((item) => renderMenuItemByType(item));
  };

  return (
    <Menu triggerSubMenuAction={"click"} mode="horizontal">
      {renderMenuItems(UserNavBarData)}
    </Menu>
  );
};

export default MenuComponent;
