import React, { useState, useEffect } from "react";
import { Cascader } from "antd";
import {
  GetClassInfoById,
  GetClassInfos,
} from "../../../fakeData/fakeClassInfo";
import { GetProcessInfoById } from "../../../fakeData/fakeProcessInfo";

const options = GetClassInfos();

// onChange: 通知上层组件本组件值发生变化，并更新上层组件中对应的值
// value: 本组件从上层组件中获取对应的值
const CascaderComponent = ({
  value: classId,
  onChange: setFormFieldValue,
  ...rest
}) => {
  const [val, setVal] = useState(classId);
  const [processInfo, setProcessInfo] = useState("");

  useEffect(() => {
    // 如果classId 为真，表示用户在修改申请类别，应加载相关流程
    if (classId) {
      console.log("classId:", classId);
      setVal(classId);
      const processId = GetClassInfoById(classId).processId;
      const pInfo = GetProcessInfoById(processId).info;
      setProcessInfo(pInfo.map((item) => item.roleId).join(" - "));
    }
  });

  const handleClassChange = (optionArr, selectedOptions) => {
    if (optionArr && optionArr.length) {
      const selectedClass = selectedOptions[selectedOptions.length - 1];
      // 更新视图
      setVal(optionArr);
      // 通知上层组件，并更新值(value)
      setFormFieldValue(selectedClass.id);
      const pInfo = GetProcessInfoById(selectedClass.processId).info;

      setProcessInfo(pInfo.map((item) => item.roleId).join(" - "));
    } else {
      // 如果清除了所选类别
      setVal("");
      setProcessInfo("");
    }
  };

  return (
    <React.Fragment>
      <Cascader
        fieldNames={{ value: "id", label: "className" }}
        allowClear={false}
        defaultValue={""}
        options={options}
        expandTrigger="click"
        displayRender={(label) => label.join("/")}
        onChange={handleClassChange}
        value={val}
        {...rest}
      />
      <br />
      {processInfo && (
        <label htmlFor="classinfo">
          <p className="text-gray-400 my-1">此分类固定流程:</p>
          <p className="font-medium mb-0">{processInfo}</p>
        </label>
      )}
    </React.Fragment>
  );
};

export default CascaderComponent;
