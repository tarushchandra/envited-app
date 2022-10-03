import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../features/event/eventSlice";

export default configureStore({
  reducer: {
    events: eventReducer,
  },
});
