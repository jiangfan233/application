import React, { useEffect, lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Form } from "antd";
import { renderFormItem } from "../common/FormItemComponent";
import TooltipComponent from "../common/TooltipComponent";
import FormButtons from "./FormButtons";
import { GetApplicationById } from "../../../fakeData/fakeApplications";
import { AppFormViewFieldConfig, AppBtnsConfig } from "./AppFormViewConfig";
import _ from "lodash";

const LazyComp = lazy(() => import("./UserInfo"));
import ApprovalDetails from "./ApprovalDetails";

const ApplicationForm = () => {
  const [form] = Form.useForm();
  const params = useParams();

  const formRows = AppFormViewFieldConfig;

  // 用于加载 Form 表单的 styles
  // formView : formRows
  // params: params
  const setFormView = (formView, params) => {
    const labelCol = {
      labelCol: {
        style: { width: calFormItemLabelWidth(formView, "label", "em") },
      },
    };
    formView.map((item) => {
      item.childConfig["disabled"] = params && params.id;
      item.formItemConfig = labelCol;
    });
    return formView;
  };

  // 使Form 表单 label 对齐,并返回 labelCol 属性 object
  // 根据 formRows 获取所有label的长度，并计算最大值
  // 单位
  const calFormItemLabelWidth = (formView, label, unit) => {
    const len = _.max(formView.map((item) => item[label].length));
    return len + unit;
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

  useEffect(() => {
    setFormData(params);
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleValuesChange = (currentFieldValue, allValues) => {
    console.log(currentFieldValue);
    form.setFieldsValue(currentFieldValue);
  };

  return (
    <div className="bg-white pb-2">
      <div className="flex items-center justify-center">
        <h1 className="my-auto text-2xl font-bold text-center">事务申请表</h1>
        <TooltipComponent Children={<LazyComp />} />
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
          {setFormView(formRows, params).map((row) => {
            return renderFormItem(
              row.name,
              row.label,
              <row.child {...row.childConfig} />,
              row.formItemConfig
            );
          })}
          {!params.id && <FormButtons btnConfigs={AppBtnsConfig} />}
        </Form>
        {params.id && <ApprovalDetails applicationId={params.id} />}
      </div>
    </div>
  );
};

export default ApplicationForm;
