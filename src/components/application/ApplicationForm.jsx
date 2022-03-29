import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Form } from "antd";
import { renderFormItem } from "../common/FormItemComponent";
import { GetApplicationById } from "../../../fakeData/fakeApplications";
import { getDepartmentNameByUserId, getUsernameById } from "../../utils/common";
import { AppFormViewFieldConfig } from "./AppFormViewFieldConfig";
import _ from "lodash";

const ApplicationDisplay = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const formRows = [
    // 应与 AppFormViewFieldConfig 中的 key 保持一致(数量、名称)
    // name对应 Form.Item 的 name 属性
    // config: 对应 Form.Item 子组件child 的相关属性
    { name: "title", config: { className: "text-center font-bold" } },
    { name: "appClassId", config: { className: "w-fit" } },
    { name: "appDescription", config: { className: "h-40" } },
    { name: "appFields", config: "" },
  ];

  const handleSave = (values) => {
    console.log(values);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleValuesChange = (currentFieldValue, allValues) => {
    console.log(currentFieldValue);
    form.setFieldsValue(currentFieldValue);
  };

  // 此申请 之前申请过，需要加载原Form数据
  const setFormData = (params) => {
    if (params && params.id) {
      const app = GetApplicationById(params.id);
      if (!app) {
        // 如果applicationId找不到
        return <Navigate to={"/not-found"} replace />;
      }
      formRows.map((item) =>
        form.setFieldsValue({ [item.name]: app[item.name] })
      );
    }
  };

  // 使Form 表单 label 对齐,并返回 labelCol 属性 object
  // 根据 formRows 获取所有label的长度，并计算最大值
  const calFormItemLabelCol = (viewFields, keys, label) => {
    const len = _.max(
      keys.map((item) => _.get(viewFields, item, label).length)
    );
    return { labelCol: { style: { width: len + "em" } } };
  };

  useEffect(() => {
    setFormData(params);
  });

  return (
    <div className="bg-white pb-2">
      <div className="flex justify-center items-center">
        <h1 className="my-auto text-2xl font-bold text-center">事务申请表</h1>
        <div className="tooltip">
          <span className="tip-icon">&#33;</span>
          <div className="tip-message">
            <p className="w-max my-1">王二</p>
            <p className="w-max my-1">黄金时代</p>
            <p className="w-max my-1">小和尚</p>
          </div>
        </div>
      </div>
      <div className="mx-2 mt-1">
        <Form
          className="w-full"
          labelAlign="right"
          layout="horizontal"
          form={form}
          onValuesChange={handleValuesChange}
          onFinish={handleSubmit}
        >
          {formRows.map((row) => {
            const rowData = AppFormViewFieldConfig[row.name];
            rowData.childConfig = {
              disabled: params && params.id,
              ...row.config,
            };
            return renderFormItem(
              row.name,
              rowData.label,
              <rowData.child {...rowData.childConfig} />,
              (rowData.formItemConfig = calFormItemLabelCol(
                AppFormViewFieldConfig,
                formRows,
                "label"
              ))
            );
          })}
        </Form>
      </div>
    </div>
  );
};

export default ApplicationDisplay;
