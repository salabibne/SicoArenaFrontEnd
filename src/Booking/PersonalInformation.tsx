import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useBookingFormStore } from "../Store/Form.Store";

// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

const PersonalInformation: React.FC = () => {
  const updatePersonalInformation = useBookingFormStore(
    (state) => state.updatePersonalInformation
  );
  const onFinish = (values: any) => {
    console.log("Success:", values);
    updatePersonalInformation(values);
  };
  return (
    <div className="border-2 rounded-e-3xl p-4 min-h-64 border-blue-300">
      {/* <h1 className="text-center text-xl font-semibold mb-4 p-8">
      Personal Information
    </h1> */}
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="pn"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInformation;
