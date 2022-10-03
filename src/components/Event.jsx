import React from "react";
import { useSelector } from "react-redux";
import {
  getEventName,
  getHostName,
  getLocation,
} from "../features/event/eventSlice";

const Event = () => {
  const eventName = useSelector(getEventName);
  const hostName = useSelector(getHostName);
  const location = useSelector(getLocation);

  return (
    <div className="event">
      <h1>{eventName}</h1>
      <p id="host">Hosted by {hostName}</p>
      <div className="date">
        <div className="date-info">
          <div className="text">
            <p id="main-text">18 August 6:00PM</p>
            <p>to 19 August 1:00PM UTC +10</p>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="location-info">
          <div className="text">
            <p id="main-text">Street name</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T113429Z&X-Amz-Expires=86400&X-Amz-Signature=f53fa4fb4840284f662834e4dad24f87e3c0be69ba48697be100f5121235c50f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        alt="img"
      />
    </div>
  );
};

export default Event;
