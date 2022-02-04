import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [money, setMoney] = useState(0);
  const onChangeMoney = (event) => setMoney(event.target.value);

  const [coinIndex, setCoinIndex] = useState(0);
  const onChangeCoins = (event) => setCoinIndex(event.target.value);

  const [buyCoin, setBuyCoin] = useState(0);

  function calcBuyCoin(){
    if(coins.length > 0){
      let price = coins[coinIndex].quotes.USD.price;
      let calc = money / price;
      setBuyCoin(calc);
    }    
  }

  useEffect(()=>{
    calcBuyCoin();
  } , [money]);

  useEffect(()=>{
    calcBuyCoin();
  } , [coinIndex]);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  } , []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : (

        <div>
          <div>
          <select value={coinIndex} onChange={onChangeCoins}>
            {coins.map((coin, index) => (
              <option key={index} value={index}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          </div>
          <label>$</label><input type="text" placeholder="your money..." value={money} onChange={onChangeMoney}/>
          <hr/>
          {buyCoin}
        </div>
        
      )}
    </div>
  );
}

export default App;
