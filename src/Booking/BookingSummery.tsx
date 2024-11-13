import React from "react";
import { Button, Card } from "antd";
import { useBookingFormStore } from "../Store/Form.Store";
import axios from "axios";

const OrderSummary = () => {
  const storeUpdate = useBookingFormStore();
  // console.log(storeUpdate.booking);
  console.log(storeUpdate);
  const orderDetails = {
    sportsCategory: storeUpdate?.bookingData?.sportsAndPerson?.sportsCategory,
    person: storeUpdate?.bookingData?.sportsAndPerson?.person.split("-")[0],
    date: storeUpdate?.bookingData?.dateAndtime?.date,
    time: storeUpdate?.bookingData?.dateAndtime?.time,
    place: storeUpdate?.bookingData?.dateAndtime?.place,
    name: storeUpdate?.bookingData?.personalInformation?.name,
    email: storeUpdate?.bookingData?.personalInformation?.email,
    pn: storeUpdate?.bookingData?.personalInformation?.pn,
    price: storeUpdate?.bookingData?.sportsAndPerson?.person.split("-")[1], // Example price field
  };

  const generateTransactionId = () => {
    const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
    const personInfo = orderDetails.person;
    const sports = orderDetails.sportsCategory;
    const transactionId = `${timeStamp}${personInfo}${sports}`;
    return transactionId;
  };

  const paymentDetails = async () => {
    const payment = {
      amount: parseInt(orderDetails.price),
      tranId: generateTransactionId(),
      customerName: orderDetails.name,
      customerEmail: orderDetails.email,
      customerPhone: orderDetails.pn,
      productName: orderDetails.sportsCategory,
    };

    try {
      const sslResponse = await axios.post(
        "http://localhost:3000/payment/initiate",
        payment
      );
      console.log("SSL Response", sslResponse.data);
      window.location.replace(sslResponse.data.paymentUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  border-2 ml-2 rounded-e-3xl p-4 min-h-64 border-blue-400">
      <Card
        title="Booking Summary"
        className="max-w-md w-full shadow-lg rounded-lg"
        headStyle={{ backgroundColor: "#17295A", color: "white" }}
      >
        <div className="p-4 space-y-3 text-lg">
          <div className="flex justify-between">
            <span className="font-semibold">Sports Category:</span>
            <span>{orderDetails.sportsCategory}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Person:</span>
            <span>{orderDetails.person}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Date:</span>
            <span className="text-blue-600 font-semibold">
              {orderDetails.date}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Time:</span>
            <span>{orderDetails.time}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Place:</span>
            <span>{orderDetails.place}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{orderDetails.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{orderDetails.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Phone Number:</span>
            <span>{orderDetails.pn}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Price:</span>
            <span className="text-red-600 font-bold">{orderDetails.price}</span>
          </div>
          <Button
            type="primary"
            onClick={paymentDetails}
            className="mt-8 w-full max-w-md"
          >
            Submit Payment
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderSummary;
