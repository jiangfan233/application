import { Button } from "antd";

const ButtonComponent = ({ type, label, ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {label}
    </Button>
  );
};

export default ButtonComponent;

export const renderButton = (type, label, rest) => {
  return (
    <Button type={type} {...rest}>
      {label}
    </Button>
  );
} 
