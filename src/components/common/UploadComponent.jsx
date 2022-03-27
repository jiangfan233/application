import React from "react";
import { Upload, Button, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  action: "action_url",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [],
};

const UploadComponent = () => {
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadComponent;
