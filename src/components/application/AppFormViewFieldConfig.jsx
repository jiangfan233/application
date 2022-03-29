// 用于配置 ApplicationForm 中的 Form.Item 相关属性值

import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CascaderComponent from "../common/CascaderComponent";
import UploadComponent from "../common/UploadComponent";

// key 应为 数据源 中的字段
export const AppFormViewFieldConfig = {
  title: {
    label: "标题",
    child: Input,
    childConfig: "",
    formItemConfig: "",
  },
  appClassId: {
    label: "事务分类",
    child: CascaderComponent,
    childConfig: "",
    formItemConfig: "",
  },
  appDescription: {
    label: "事务描述",
    child: TextArea,
    childConfig: "",
    formItemConfig: "",
  },
  appFields: {
    label: "附件",
    child: UploadComponent,
    childConfig: "",
    formItemConfig: "",
  },
};
