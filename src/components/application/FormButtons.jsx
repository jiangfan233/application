import { renderButton } from "../common/ButtonComponent";

// 用于封装 ApplicationForm 中的 Buttons
const FormButtons = ({ btnConfigs }) => {
  const handleSave = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-row justify-end space-x-2 p-2">
      {btnConfigs.map((item) =>
        renderButton(item.name, item.type, item.label, item.onClick, item.rest)
      )}
    </div>
  );
};

export default FormButtons;
