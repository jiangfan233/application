import { Button } from "antd";

const ButtonComponent = ({ type, label, ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {label}
    </Button>
  );
};

export default ButtonComponent;

export const renderButton = (key, type, label, onClick, rest) => {
  return (
    <Button key={key} type={type} onClick={onClick} {...rest}>
      {label}
    </Button>
  );
};
