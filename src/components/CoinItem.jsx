import React from "react";

const CoinItem = (props) => {
  return (
    <div className="coins-container text-sm text-[#333333] font-bold grid grid-cols-4 md:grid-cols-6 max-w-[1080px] w-full m-auto rounded bg-[#fff] shadow-md p-2 mt-3">
      <div className="flex justify-center items-center">
        <p>{props.coins.market_cap_rank}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={props.coins.image} alt="" className="h-[30px]" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>${props.coins.current_price.toLocaleString()}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <p>${props.coins.total_volume.toLocaleString()}</p>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <p>${props.coins.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinItem;
