import { Form } from "antd";
import { renderButton } from "../common/ButtonComponent";

// 用于封装 ApplicationForm 中的 Buttons
const FormButtons = ({ btnConfigs }) => {
  return (
    <Form.Item>
      <div className="flex flex-row flex-wrap justify-evenly sm:justify-end items-center p-2">
        {btnConfigs.map((item) =>
          renderButton(
            item.name,
            item.type,
            item.label,
            item.onClick,
            item.rest
          )
        )}
      </div>
    </Form.Item>
  );
};

export default FormButtons;
