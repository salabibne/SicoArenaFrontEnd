import React, { useState } from "react";
import { Button, Flex, Form, Input, Radio, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import parsePersonPrice from "../../../Utils/ParsePersonPrice";
import { convertList } from "../../../Utils/ConvertList";
import axios from "axios";
import ShowPopUp from "../../../../UIComponents/Modal";

// Component for handling radio groups with an option to add custom values
const CustomRadioInput = ({ label, options, inputValue, setInputValue }) => {
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-xl font-semibold text-[#17295A] mb-2 p-2">
        {label}
      </label>

      <div className="flex gap-4 items-center space-x-4">
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
          className="m text-[#17295A]"
        >
          <PlusOutlined />
          Add
        </Button>
      </div>

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

//componnet for  person-price Multiple option selection and add custom value
const CustomMultipleOptionsInput = ({
  label,
  options,
  inputValue,
  setInputValue,
  flag,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [customValue, setCustomValue] = useState("");
  return (
    <div className="mb-4">
      <label className="block text-xl font-semibold text-[#17295A] mb-2 p-2">
        {label}
      </label>
      <div className="flex gap-4 items-center space-x-4">
        <Select
          mode="multiple"
          value={inputValue}
          onChange={(value) => setInputValue(value)}
        >
          {options.map((option, index) =>
            flag ? (
              <Select.Option value={option} key={index}>
                {/* {`${option}+price`} */}
                {parsePersonPrice(option)}
              </Select.Option>
            ) : (
              <Select.Option value={option} key={index}>
                {option}
              </Select.Option>
            )
          )}
          {customValue && !options.includes(customValue) && (
            <Select.Option value={customValue} key={options.length}>
              {/* {customValue} */}
              {flag ? parsePersonPrice(customValue) : customValue}
            </Select.Option>
          )}
        </Select>

        <Button
          size="small"
          onClick={() => setShowInput(true)}
          className=" text-[#17295A]"
        >
          <PlusOutlined />
          Add
        </Button>
      </div>
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

  const [personPriceOptions] = useState(["1-10", "11-20", "21-30"]);
  const [selectedPersonPrice, setSelectedPersonPrice] = useState<
    string | number
  >("1-10");

  const [TimeOptions] = useState([
    "9.30 AM",
    "1:10 PM",
    "11:20 AM",
    "21:30 PM",
  ]);
  const [selectedTime, setSelectedTime] = useState<string>("9:30 PM");

  const [PlaceOptions] = useState(["A", "B", "C", "D"]);
  const [selectedPlace, setSelectedPlace] = useState<string>("A");

  const [statusOptions] = useState(["Active", "Inactive"]);
  const [selectedStatus, setSelectedStatus] = useState<string>("Active");

  // show modal
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [flag, setFlag] = useState<string | undefined>(undefined);

  const onFinish = async (values: any) => {
    const personPrice = convertList(selectedPersonPrice);
    const time = convertList(selectedTime);
    const place = convertList(selectedPlace);
    const person = selectedPerson;
    const status = selectedStatus;

    const formSubmission = {
      inputValue,
      person,
      personPrice,
      time,
      place,
      status,
    };
    console.log("Form Submission:", formSubmission);

    try {
      const response = await axios.post(
        "http://localhost:3000/sports-service",
        formSubmission
      );
      console.log("Successful Response", response);
      if (response.statusText == "Created") {
        setSuccess(true); // Show success message
        setError(undefined); // Clear any previous error
        setFlag("sportsCreated");
      }
    } catch (error) {
      console.log("Error Response", error);
      setSuccess(false); // Show error message
      setError(` ${error}`);
      setFlag("sportsCreated");
    }
  };

  const closeModal = () => {
    setSuccess(undefined);
    setError(undefined);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#17295A]">
        Add Service Details
      </h1>
      <Form layout="vertical" onFinish={onFinish} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
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

          {/* Person Price Field */}
          <CustomMultipleOptionsInput
            label="Person Price"
            options={personPriceOptions}
            inputValue={selectedPersonPrice}
            setInputValue={setSelectedPersonPrice}
            flag={true}
          />

          {/* Time Field */}
          <CustomMultipleOptionsInput
            label="Time"
            options={TimeOptions}
            inputValue={selectedTime}
            setInputValue={setSelectedTime}
            flag={false}
          />

          {/* Place Field */}
          <CustomMultipleOptionsInput
            label="Place"
            options={PlaceOptions}
            inputValue={selectedPlace}
            setInputValue={setSelectedPlace}
            flag={false}
          />

          {/* Status Field */}
          <CustomRadioInput
            label="Status"
            options={statusOptions}
            inputValue={selectedStatus}
            setInputValue={setSelectedStatus}
          />
        </div>

        {/* Submit Button */}
        <Form.Item>
          <div className="flex items-center justify-center mt-4">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#17295A] text-white px-6 py-2 rounded-lg font-semibold text-base"
            >
              Create Service
            </Button>
          </div>
        </Form.Item>
      </Form>
      {success !== undefined && (
        <ShowPopUp
          visible={true}
          success={success}
          error={error}
          onClose={closeModal} // Close modal by resetting state
          flag={flag}
        />
      )}
    </div>
  );
};

export default AddServiceForm;
