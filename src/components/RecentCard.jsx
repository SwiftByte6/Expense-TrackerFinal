import React from "react";
import Img from "../assets/Bag.png";

const RecentCard = () => {
  return (
    <div className="shadow-sm w-[95%] md:w-[90%] lg:w-[85%] h-16 md:h-20 m-auto mt-4 flex items-center p-2 md:p-4 bg-white rounded-lg">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0">
        <img src={Img} alt="Recent Expense" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="h-full w-full flex justify-between items-center px-3 md:px-5">
        <h1 className="text-lg md:text-2xl">Shopping</h1>
        <h1 className="text-lg md:text-2xl">$200</h1>
      </div>
    </div>
  );
};

export default RecentCard;
