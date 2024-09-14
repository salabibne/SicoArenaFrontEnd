import axios from "axios";
import { create } from "zustand";
export const useBookingFormStore = create((set) => ({
  bookingData: {
    sportsAndPerson: {},
    dateAndtime: {},
    personalInformation: {},
  },
  updateSportsAndPerson: (sp) =>
    set((state) => {
      const updatedState = {
        bookingData: { ...state.bookingData, sportsAndPerson: sp },
      };
      console.log(
        "Updated sportsAndPerson:",
        updatedState.bookingData.sportsAndPerson
      );
      return updatedState;
    }),
  updateDateAndTime: (dt) =>
    set((state) => {
      const updateState = {
        bookingData: { ...state.bookingData, dateAndtime: dt },
      };
      console.log("Updated DateTime: ", updateState.bookingData.dateAndtime);
      return updateState;
    }),
  updatePersonalInformation: (pi) =>
    set(async (state) => {
      const updateState = {
        bookingData: { ...state.bookingData, personalInformation: pi },
      };
      console.log(
        "Updated Personal Information: ",
        updateState.bookingData.personalInformation
      );
      console.log("Full : ", updateState.bookingData);
      try {
        const response = await axios.post(
          "http://localhost:3000/form",
          updateState.bookingData
        );

        console.log("response", response);
        if (response.statusText == "Created") {
          alert("Your slot has been booked");
        }
      } catch (error) {
        console.log("error", error);
      }
      return updateState;
    }),
}));
