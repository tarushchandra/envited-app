import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    eventName: "",
    hostName: "",
    location: "",
  },
  reducers: {
    updateEventName: (state, action) => {
      state.eventName = action.payload;
    },
    updateHostName: (state, action) => {
      state.hostName = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updateEventName, updateHostName, updateLocation } =
  eventSlice.actions;
export const getEventName = (state) => state.events.eventName;
export const getHostName = (state) => state.events.hostName;
export const getLocation = (state) => state.events.location;
export default eventSlice.reducer;
