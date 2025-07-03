import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import image_banner_1 from "../assets/image_banner_1.png";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex w-[900px] max-w-full">
        <div className="w-full md:w-1/2 p-10 px-5 py-5">
          <h2 className="text-3xl font-bold text-center mb-8">Đăng ký</h2>
          <Form
            name="login-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tên đăng nhập"
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              label="Xác nhận mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập xác nhận mật khẩu!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full !bg-yellow-600"
                size="large"
              >
                Đăng ký
              </Button>
            </Form.Item>
            <p className="text-center">
              Bạn đã có tài khoản?
              <Link to="/sign-in" className="!text-yellow-600 hover:underline">
                | Đăng nhập
              </Link>
            </p>
          </Form>
        </div>

        <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${image_banner_1})` }}
        >
        </div>
      </div>
    </div>
  );
};
