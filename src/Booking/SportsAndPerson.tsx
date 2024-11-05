import React, { useEffect } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { useBookingFormStore } from "../Store/Form.Store";
import axios from "axios";
import { useFetchSportsDataForStore } from "../Store/FetchSportsData";
import parsePersonPrice from "../Admin/Utils/ParsePersonPrice";
import LoopPersonPrice from "../HelperFunctions/LoopPersonPrice";

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
  const { sportsData, updateSportsData } = useFetchSportsDataForStore();

  const updateSportsAndPerson = useBookingFormStore(
    (state) => state.updateSportsAndPerson
  );

  const onSportsCategorySelect = async (value: string) => {
    // console.log("onsportsCategorySelect", value);
    try {
      const sportsCategoryFetching = await axios.get(
        `http://localhost:3000/sports-service/${value}`
      );
      console.log("sportsCategoryFetching", sportsCategoryFetching.data);
      // useFetchSportsDataForStore.updateSportsData(sportsCategoryFetching.data);
      updateSportsData(sportsCategoryFetching.data);
    } catch (error) {
      console.log("sportsCetogiryFetch", error);
    }
  };
  useEffect(() => {
    console.log("Updated sportsData in store:", sportsData);
  }, [sportsData]);

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
          <Select
            placeholder="Select Sports Category"
            allowClear
            onChange={onSportsCategorySelect}
          >
            <Option value="Cricket">Cricket</Option>
            <Option value="Football">Football</Option>
          </Select>
        </Form.Item>
        <Form.Item name="person" label="Person" rules={[{ required: true }]}>
          {sportsData.map((item) => (
            <Select placeholder="Choose Person" allowClear>
              console.log({item.personPrice});
              {LoopPersonPrice(item.personPrice).map((option, index) => (
                <Option key={index} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          ))}
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
