import React from "react";
import { Line, Bar } from "@ant-design/charts"; // Chart library for Line and Bar charts
import {
  DollarCircleOutlined,
  BookOutlined,
  RocketOutlined,
} from "@ant-design/icons";

// Example data for the earnings chart
const earningsData = [
  { day: "Monday", earnings: 500 },
  { day: "Tuesday", earnings: 600 },
  { day: "Wednesday", earnings: 700 },
  { day: "Thursday", earnings: 550 },
  { day: "Friday", earnings: 900 },
  { day: "Saturday", earnings: 850 },
  { day: "Sunday", earnings: 400 },
];

// Example data for the bookings chart
const bookingsData = [
  { day: "Monday", bookings: 10 },
  { day: "Tuesday", bookings: 12 },
  { day: "Wednesday", bookings: 9 },
  { day: "Thursday", bookings: 15 },
  { day: "Friday", bookings: 14 },
  { day: "Saturday", bookings: 13 },
  { day: "Sunday", bookings: 11 },
];

// Chart configuration for earnings (line chart)
const earningsConfig = {
  data: earningsData,
  xField: "day",
  yField: "earnings",
  smooth: true,
  color: "rgb(43, 54, 116)",
};

// Chart configuration for bookings (bar chart)
const bookingsConfig = {
  data: bookingsData,
  xField: "day",
  yField: "bookings",
  color: "rgb(43, 54, 116)",
  barWidthRatio: 0.5,
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Top Section: Avatar and Welcome Message */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="bg-blue-200 rounded-full p-2">
            <img
              src="https://via.placeholder.com/64"
              alt="Admin Avatar"
              className="rounded-full w-16 h-16"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-semibold text-[rgb(43,54,116)]">
              Admin Name
            </h4>
            <p className="text-[rgb(43,54,116)]">Welcome back!</p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <h2 className="text-3xl font-bold text-[rgb(43,54,116)] mb-8">
        Welcome to the Admin Dashboard!
      </h2>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <DollarCircleOutlined className="text-[rgb(43,54,116)] text-4xl mb-2" />
          <h4 className="text-lg font-semibold text-[rgb(43,54,116)]">
            Today's Earnings
          </h4>
          <p className="text-[rgb(43,54,116)] text-xl">$1200</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <BookOutlined className="text-[rgb(43,54,116)] text-4xl mb-2" />
          <h4 className="text-lg font-semibold text-[rgb(43,54,116)]">
            Today's Bookings
          </h4>
          <p className="text-[rgb(43,54,116)] text-xl">15</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <RocketOutlined className="text-[rgb(43,54,116)] text-4xl mb-2" />
          <h4 className="text-lg font-semibold text-[rgb(43,54,116)]">
            Services Live
          </h4>
          <p className="text-[rgb(43,54,116)] text-xl">5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-[rgb(43,54,116)] mb-4">
            Earnings in the Last 7 Days
          </h4>
          <Line {...earningsConfig} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-[rgb(43,54,116)] mb-4">
            Bookings in the Last 7 Days
          </h4>
          <Bar {...bookingsConfig} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
