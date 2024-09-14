import React from "react";
import { Button, DatePicker, Form, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { useBookingFormStore } from "../Store/Form.Store";

// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

const disableDate = (current: any) => {
  const today = new Date();
  return current && current < today.setHours(0, 0, 0, 0);
};

const DateTime: React.FC = () => {
  const updateDateAndTime = useBookingFormStore(
    (state) => state.updateDateAndTime
  );
  const onFinish = (values: any) => {
    console.log(values);
    updateDateAndTime(values);
  };
  return (
    <div className=" border-r-2 border-t-2 border-b-2 rounded-e-3xl p-6 min-h-64  border-blue-300">
      {/* <h1 className="text-center text-xl font-semibold mb-4 p-8">
      Select Date And Time
    </h1> */}
      <Form
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="flex">
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker disabledDate={disableDate} />
          </Form.Item>
          <Form.Item name="time" label="Time" rules={[{ required: true }]}>
            <Select placeholder="Select Time" allowClear>
              <Option value="46p">4Pm to 6Pm</Option>
              <Option value="122p">12Pm to 2Pm</Option>
            </Select>
          </Form.Item>
          <Form.Item name="place" label="Place" rules={[{ required: true }]}>
            <Select placeholder="Select Place" allowClear>
              <Option value="Ground">Ground</Option>
              <Option value="Roof">RoofTop</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DateTime;
