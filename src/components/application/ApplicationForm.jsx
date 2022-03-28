import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Form, Input } from "antd";
import CascaderComponent from "../common/CascaderComponent";
import UploadComponent from "../common/UploadComponent";
import ArrowContent from "../common/ArrowContent";
import { renderFormItem } from "../common/FormItemComponent";
import { renderButton } from "../common/ButtonComponent";
import { GetApplicationById } from "../../../fakeData/fakeApplications";
import { getDepartmentByUserId, getNameFromUserId } from "../../utils/common";

const { TextArea } = Input;

const ApplicationDisplay = () => {
  const [form] = Form.useForm();
  const params = useParams();

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

  // 用于把 application 的数据格式一一映射到form上
  const appMaptoField = (app) => {
    return {
      title: app.title,
      applicant: getNameFromUserId(app.applicantId),
      department: getDepartmentByUserId(app.applicantId),
      applicationDate: app.date,
      transactionClassId: app.classId,
      transactionDesc: app.description,
      fileIds: app.fileIds,
    };
  };

  const setFormData = (params) => {
    if (params && params.id) {
      const app = GetApplicationById(params.id);
      if (!app) {
        // 如果applicationId找不到
        return <Navigate to={"/not-found"} replace />;
      }
      // 此申请 之前申请过，需要加载原Form数据
      form.setFieldsValue(appMaptoField(app));
    }
  };

  useEffect(() => {
    setFormData(params);
  });

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold text-center">事务申请表</h1>
      <div className="mx-2">
        <Form
          className="w-full"
          labelAlign="right"
          layout="horizontal"
          form={form}
          onValuesChange={handleValuesChange}
          onFinish={handleSubmit}
        >
          {renderFormItem(
            "title",
            "标题:",
            <Input size="large" disabled={params && params.id} />,
            {
              labelCol: { style: { width: "5em" } },
            }
          )}

          <div className="flex items-start flex-col place-content-start sm:flex-row sm:place-content-between">
            {renderFormItem(
              "transactionClassId",
              "事务分类:",
              <CascaderComponent disabled={params && params.id} />,
              { className: "w-full sm:w-auto sm:max-w-md" }
            )}

            <ArrowContent className="p-2">
              <div>
                {renderFormItem("applicant", "申请人:", <Input disabled />, {
                  labelCol: { style: { width: "5em" } },
                  className: "mb-auto !importment",
                })}
                {renderFormItem("department", "部门:", <Input disabled />, {
                  labelCol: { style: { width: "5em" } },
                  className: "mb-auto !importment",
                })}
                {renderFormItem(
                  "applicationDate",
                  "申请日期:",
                  <Input disabled />,
                  {
                    labelCol: { style: { width: "5em" } },
                    className: "mb-auto !importment",
                  }
                )}
              </div>
            </ArrowContent>
          </div>
          {renderFormItem(
            "transactionDesc",
            "事务描述:",
            <TextArea
              disabled={params && params.id}
              className="h-40"
              maxLength={255}
              showCount
            />,
            { labelCol: { style: { width: "5em" } } }
          )}
          {renderFormItem("fileIds", "附件:", <UploadComponent />, {
            labelCol: { style: { width: "5em" } },
          })}

          <div className="flex flex-row justify-end space-x-2 p-2">
            {renderButton("default", "保存", {
              htmlType: "submit",
              onClick: handleSave,
            })}
            {renderButton("primary", "提交", { htmlType: "submit" })}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ApplicationDisplay;
