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
// 关于 htmlType: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export const AppBtnsConfig = [
  {
    name: "resetAll",
    type: "danger",
    label: "清空",
    onClick: () => {},
    rest: {
      htmlType: "reset",
      className: "mx-2 relative sm:absolute sm:left-0",
    },
  },
  {
    name: "endorse",
    type: "default",
    label: "加签",
    onClick: () => console.log("加签"),
    rest: {
      htmlType: "button",
      className: "mx-2 sm:mr-12",
    },
  },
  {
    name: "save",
    type: "default",
    label: "保存",
    onClick: () => {},
    rest: {
      htmlType: "submit",
      className: "mx-2",
    },
  },
  {
    name: "submit",
    type: "primary",
    label: "提交",
    onClick: () => {},
    rest: {
      htmlType: "submit",
      className: "mx-2",
    },
  },
];
