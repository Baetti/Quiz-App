import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      style={{ height: "75vh", width: "100%" }}
      className="d-flex  justify-content-center p-5  "
    >
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        <h1
          style={{ fontFamily: "Rubik Pixels", fontSize: "60px" }}
          className="text-center"
        >
          React Quiz
        </h1>
        <Link
          className="btn border border-primary fs-4 shadow"
          style={{ fontFamily: "Rubik Pixels" }}
          to={"/game"}
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Landing;
