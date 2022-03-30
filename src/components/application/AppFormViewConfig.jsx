// 用于配置 ApplicationForm 中的 Form.Item 相关属性值

import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CascaderComponent from "../common/CascaderComponent";
import UploadComponent from "../common/UploadComponent";

// name 对应 数据源 中的字段
export const AppFormViewFieldConfig = [
  {
    name: "title",
    label: "标题:",
    child: Input,
    childConfig: { className: "text-xl text-center font-bold" },
    formItemConfig: {},
  },
  {
    name: "appClassId",
    label: "事务分类:",
    child: CascaderComponent,
    childConfig: { className: "w-fit" },
    formItemConfig: {},
  },
  {
    name: "appDescription",
    label: "事务描述:",
    child: TextArea,
    childConfig: { className: "h-40" },
    formItemConfig: {},
  },
  {
    name: "appFields",
    label: "附件:",
    child: UploadComponent,
    childConfig: {},
    formItemConfig: {},
  },
];

// 用于配置 ApplicatinForm 表单中的按钮
export const AppBtnsConfig = [
  {
    name: "resetAll",
    type: "default",
    label: "清空",
    onClick: (form) => form.reset(),
  },
  {
    name: "endorse",
    type: "default",
    label: "加签",
    onClick: () => console.log("加签"),
  },
  {
    name: "save",
    type: "default",
    label: "保存",
    onClick: () => {},
  },
  {
    name: "submit",
    type: "primary",
    label: "提交",
    onClick: () => {},
    rest: {
      htmlType: "submit",
    },
  },
];
