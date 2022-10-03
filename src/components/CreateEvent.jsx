import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getEventName,
  getHostName,
  getLocation,
  updateEventName,
  updateHostName,
  updateLocation,
} from "../features/event/eventSlice";

const CreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const eventName = useSelector(getEventName);
  const hostName = useSelector(getHostName);
  const location = useSelector(getLocation);

  console.log(eventName, hostName, location);

  return (
    <div className="create-event">
      <h1>Create your Event</h1>
      <table>
        <tbody>
          <tr>
            <h3>Event Name</h3>
            <input
              onChange={(e) => dispatch(updateEventName(e.target.value))}
              type="text"
              value={eventName}
              placeholder="Enter Event Name"
            />
          </tr>
          <tr>
            <h3>Host Name</h3>
            <input
              onChange={(e) => dispatch(updateHostName(e.target.value))}
              type="text"
              value={hostName}
              placeholder="Enter Host Name"
            />
          </tr>
          <tr>
            <h3>Start Time</h3>
            <input type="datetime-local" />
          </tr>
          <tr>
            <h3>End Time</h3>
            <input type="datetime-local" />
          </tr>
          <tr>
            <h3>Location</h3>
            <input
              onChange={(e) => dispatch(updateLocation(e.target.value))}
              type="text"
              value={location}
              placeholder="Enter Location"
            />
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate("/event")}>
        <p>Next</p>
      </button>
    </div>
  );
};

export default CreateEvent;
