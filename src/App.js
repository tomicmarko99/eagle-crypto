import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CryptoEagleLogo from "./assets/crypto-eagle-logo.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [searchWord, setSearchWord] = useState("");
  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  const [loc, setLoc] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoc(false);
    } else {
      setLoc(true);
    }
  });

  return (
    <>
      <div className="Navbar w-full bg-[#fff] m-auto px-5 py-3 fixed">
        <div className="max-w-[1080px] w-full m-auto flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between">
          <div className="logo flex items-center text-[#333333] text-3xl font-[500]">
            <img src={CryptoEagleLogo} alt="" className="max-w-[50px]" />
            <p className="">CryptoEagle</p>
          </div>
          <div className="search flex items-center gap-3">
            {loc ? (
              [
                <AiOutlineSearch className="text-2xl text-[#555555]" />,
                <input
                  type="text"
                  placeholder="Search crypto"
                  onChange={(event) => {
                    setSearchWord(event.target.value);
                  }}
                  className="border-2 border-[#555555] rounded-xl px-3 py-[2px] text-[#555555] outline-none"
                />,
              ]
            ) : (
              <Link to="/">
                <div className="text-[#333333] flex items-center">
                  <AiOutlineLeft /> <p>GO BACK</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Coins filteredCoins={filteredCoins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
