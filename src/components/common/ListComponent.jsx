import { List, Avatar } from "antd";

const ListComponent = ({ data, itemLayout, ...rest }) => {
  return (
    <List
      {...rest}
      itemLayout={itemLayout}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.avatarSrc && <Avatar src={item.avatarSrc} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
