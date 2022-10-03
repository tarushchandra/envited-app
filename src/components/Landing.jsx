import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T112636Z&X-Amz-Expires=86400&X-Amz-Signature=7294a204b469c9530218cce29a39f17a3fc99a82e233d1e66b0e576404681755&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        alt="img"
      />
      <div className="heading-text">
        <div className="heading">
          <h1 id="intro-text">
            Imagine if <span id="snapchat">Snapchat</span> <br /> had events.
          </h1>
        </div>
        <p>
          Easily host and share events with your friends across any social media
        </p>
      </div>
      <button onClick={() => navigate("/create")}>
        <p> Create my event</p>
      </button>
    </div>
  );
};

export default Landing;
