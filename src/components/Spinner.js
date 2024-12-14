import React from "react";
import loading from "../loading.gif";
const spinner = () => {
  return (
    <div className="container">
      <div className=" my-2 text-center">
        <img src={loading} alt="loading" height={"35px"} />
      </div>
    </div>
  );
};

export default spinner;
