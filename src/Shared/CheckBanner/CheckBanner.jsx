import React from "react";
import checkout from "../../assets/images/checkout/checkout.png";

const CheckBanner = () => {
  return (
    <>
      <div>
        <img className="max-w-7xl mx-auto relative" src={checkout} alt="" />
        <button className="absolute top-96 right-52 bg-orange-600 border-collapse rounded-md px-8 py-3 mb-2">
          Check Out
        </button>
      </div>
    </>
  );
};

export default CheckBanner;
