import { Form } from "antd";

const FormItemComponent = ({ name, label, Children, ...rest }) => {
  return (
    <Form.Item name={name} label={label} {...rest}>
      {Children}
    </Form.Item>
  );
};

export default FormItemComponent;

export const renderFormItem = (name, label, Children, rest) => {
  return (
    <Form.Item key={name} name={name} label={label} {...rest}>
      {Children}
    </Form.Item>
  );
};
