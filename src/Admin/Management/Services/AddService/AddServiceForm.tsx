import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
//  handle radio groups with an option to add custom values
const CustomRadioInput = ({ label, options, inputValue, setInputValue }) => {
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState("");

  return (
    <Form.Item label={label} name={label}>
      <Radio.Group
        size="large"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      >
        {options.map((option, index) => (
          <Radio value={option} key={index}>
            {option}
          </Radio>
        ))}
        {customValue && !options.includes(customValue) && (
          <Radio value={customValue}>{customValue}</Radio>
        )}
      </Radio.Group>
      <Button size="small" onClick={() => setShowInput(true)}>
        <PlusOutlined />
      </Button>
      {showInput && (
        <>
          <Input
            placeholder={`Add ${label}`}
            onChange={(e) => setCustomValue(e.target.value)}
            onPressEnter={() => setShowInput(false)}
          />
        </>
      )}
    </Form.Item>
  );
};

const AddServiceForm: React.FC = () => {
  const [sportsOptions] = useState(["Cricket", "Football"]); // Static options for sports
  const [inputValue, setInputValue] = useState("Cricket");

  const [personOptions] = useState([1, 2, 3]);
  const [selectedPerson, setSelectedPerson] = useState<number | string>(1);

  // Handle form submission
  const onFinish = (values: any) => {
    console.log("Form Submission:", {
      inputValue,
      selectedPerson,
    });
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold py-4 text-[#17295A]">
          Add Service Details
        </h1>
      </div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        style={{ maxWidth: 900 }}
        onFinish={onFinish}
        size="large"
      >
        {/* Sports Type Field */}
        <CustomRadioInput
          label="Sports"
          options={sportsOptions}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {/* Person Field */}
        <CustomRadioInput
          label="Person"
          options={personOptions}
          inputValue={selectedPerson}
          setInputValue={setSelectedPerson}
        />

        {/* Submit Button */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddServiceForm;
