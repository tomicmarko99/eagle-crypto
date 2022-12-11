import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const [coin, setCoins] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full px-3 md:px-5 pt-[150px] md:pt-[120px] pb-[50px]">
      <div className="max-w-[1080px] m-auto flex flex-col gap-5">
        <div className="bg-[#fff] shadow-md rounded p-5 md:p-5 flex items-center justify-center">
          <h1 className="text-3xl text-[#555555] font-bold">{coin.name}</h1>
        </div>
        <div className="bg-[#fff] shadow-md rounded p-3 md:p-5 flex items-center">
          <div className="w-full flex flex-col gap-5">
            <div className="flex">
              <div className="bg-[#555555] shadow-md py-2 px-5 rounded-md text-sm text-[#fff] font-[500]">
                <p>Rank # {coin.market_cap_rank}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="md:text-xl text-[#555555] font-[500] flex items-center gap-3">
                {coin.image ? <img src={coin.image.small} alt="" /> : null}
                {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
              </div>
              <div className="md:text-4xl text-[#333333] font-[500] flex items-center justify-center">
                {coin.market_data?.current_price ? (
                  <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] shadow-md rounded p-3 md:p-5 flex items-center">
          <div className="grid w-full grid-cols-6 gap-1 md:gap-3">
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>1h</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>24h</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>7d</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_7d_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>14d</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_14d_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>30d</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_30d_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="bg-[#555555] text-[#fff] font-[500] rounded w-full flex justify-center">
                <p>1yr</p>
              </div>
              <div>
                {coin.market_data?.price_change_percentage_1y_in_currency ? (
                  <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] shadow-md rounded p-3 md:p-5 flex items-center">
          <div className="w-full text-[#333333] font-[500] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[80px]">
            <div className="flex flex-col">
              <div className="flex justify-between border-b-2">
                <div>
                  <p>24 Hour Low</p>
                </div>
                <div>{coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}</div>
              </div>
              <div className="flex justify-between border-b-2">
                <div>
                  <p>24 Hour High</p>
                </div>
                <div>
                  {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between border-b-2">
                <div>
                  <p>Market Cap</p>
                </div>
                <div>
                  {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                </div>
              </div>
              <div className="flex justify-between border-b-2">
                <div>
                  <p>Circulating Supply</p>
                </div>
                <div>{coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] shadow-md rounded p-3 md:p-5 flex items-center">
          <div className="w-full text-[#333333] flex flex-col gap-3">
            <h2 className="text-2xl font-bold">About</h2>
            <div className="text-md">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
