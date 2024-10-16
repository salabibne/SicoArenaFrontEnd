import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// Component for handling radio groups with an option to add custom values
const CustomRadioInput = ({ label, options, inputValue, setInputValue }) => {
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-xl font-semibold text-[#17295A] mb-2 p-2">
        {label}
      </label>
      <Radio.Group
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex space-x-4"
      >
        {options.map((option, index) => (
          <Radio value={option} key={index} className="text-lg font-custom">
            {option}
          </Radio>
        ))}
        {customValue && !options.includes(customValue) && (
          <Radio value={customValue} className="text-lg font-custom">
            {customValue}
          </Radio>
        )}
      </Radio.Group>
      <Button
        size="small"
        onClick={() => setShowInput(true)}
        className="mt-4 text-[#17295A]"
      >
        <PlusOutlined />
        Add
      </Button>
      {showInput && (
        <Input
          placeholder={`Add ${label}`}
          className="mt-2"
          onChange={(e) => setCustomValue(e.target.value)}
          onPressEnter={() => setShowInput(false)}
        />
      )}
    </div>
  );
};

const AddServiceForm: React.FC = () => {
  const [sportsOptions] = useState(["Cricket", "Football"]);
  const [inputValue, setInputValue] = useState("Cricket");

  const [personOptions] = useState([1, 2, 3]);
  const [selectedPerson, setSelectedPerson] = useState<number | string>(1);

  const onFinish = (values: any) => {
    console.log("Form Submission:", { inputValue, selectedPerson });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#17295A]">
        Add Service Details
      </h1>
      <Form layout="vertical" onFinish={onFinish} className="space-y-6">
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
        <Form.Item>
          <div className="flex">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#17295A] text-white px-6 py-2 rounded-lg font-semibold text-base"
            >
              Submit Service Details
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddServiceForm;
