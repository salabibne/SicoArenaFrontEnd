import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { useBookingFormStore } from "../Store/Form.Store";

const { Option } = Select;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 16 },
};

const SportsAndPerson: React.FC = () => {
  const [form] = Form.useForm();

  const updateSportsAndPerson = useBookingFormStore(
    (state) => state.updateSportsAndPerson
  );
  const onFinish = (values: any) => {
    console.log(values);
    updateSportsAndPerson(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className=" border-2 rounded-e-3xl p-6 min-h-64 border-blue-300">
      {/* <h1 className="text-center text-xl font-semibold mb-4 p-8">
        Select Sports Category and Person
      </h1> */}
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="sportsCategory"
          label="Sports"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Sports Category" allowClear>
            <Option value="Cricket">Cricket</Option>
            <Option value="Football">Football</Option>
          </Select>
        </Form.Item>
        <Form.Item name="person" label="Person" rules={[{ required: true }]}>
          <Select placeholder="Choose Person" allowClear>
            <Option value="14">14</Option>
            <Option value="16">16</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SportsAndPerson;
