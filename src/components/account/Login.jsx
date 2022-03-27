import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("isLogin", true)
    if(values.username=== "admin") {
      localStorage.setItem("role","admin")
      navigate("/", {state: {targetPath: "/admin"}})
      return
    }
    localStorage.setItem("role","user");
    navigate("/application/myforms")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex">
      <Form
        className="w-full"
        name="basic"
        labelAlign="right"
        labelCol={{
          span: "",
        }}
        wrapperCol={{
          span: "",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "用户名不能为空!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "密码不能为空!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: "",
            span: "",
          }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: "",
            span: "",
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
