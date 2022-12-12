import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Coins = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(true);
  const dataForDisplay = expanded ? props.filteredCoins : props.filteredCoins.slice(0, 10);
  useEffect(() => {
    if (props.filteredCoins.length < 10) {
      setShow(false);
    } else {
      setShow(true);
    }
  });
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
        {dataForDisplay.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
        {show ? (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-md text-[#333333] mt-5 w-full flex justify-center items-center gap-2"
          >
            {expanded ? [<AiOutlineUp />, "Show Less"] : [<AiOutlineDown />, "Show More"]}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Coins;
