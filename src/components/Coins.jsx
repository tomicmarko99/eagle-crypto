import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="coins-box w-full px-3 pt-[150px] md:pt-[120px] pb-[50px]">
      <div className="max-w-[1080px] m-auto">
        <div className="coins-container text-[#fafafa] font-bold grid grid-cols-4 md:grid-cols-6 max-w-[1280px] w-full m-auto mb-6 rounded bg-[#333333] shadow-md p-2">
          <div className="flex justify-center">
            <p>#</p>
          </div>
          <div className="flex justify-center">
            <p>Coin</p>
          </div>
          <div className="flex justify-center">
            <p>Price</p>
          </div>
          <div className="flex justify-center">
            <p>24h</p>
          </div>
          <div className="hidden md:flex justify-center">
            <p>Volume</p>
          </div>
          <div className="hidden md:flex justify-center">
            <p>Mkt Cap</p>
          </div>
        </div>
        {props.filteredCoins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
