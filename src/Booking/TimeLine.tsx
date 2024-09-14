import React from "react";
import { Timeline } from "antd";

const TimeLine: React.FC = () => (
  <Timeline
    items={[
      {
        children: "Select Sports Category",
        color: "green",
      },

      {
        children: "Choose Date",
      },
      {
        children: "Personal Information",
      },
    ]}
  />
);

export default TimeLine;
