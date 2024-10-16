import { Button, Table } from "antd";
import { Link } from "react-router-dom";

const Services = () => {
  const columns = [
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="link">Edit</Button>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Service One",
      category: "Category A",
      price: "$100",
    },
    {
      key: "2",
      name: "Service Two",
      category: "Category B",
      price: "$200",
    },
  ];

  return (
    <div className="p-6">
      {/* Add Service Button */}
      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          style={{ backgroundColor: "#17295A", borderColor: "#17295A" }}
          className="text-white"
        >
          <Link to="/admin/services/add">Add Service</Link>
        </Button>
      </div>

      {/* Services Table */}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Services;
