import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(()=>{
    console.log("run once.");
  }, []);

  useEffect(()=>{
    console.log("change counter.");
  }, [counter]);

  useEffect(()=>{
    if(keyword !== ""){
      console.log("change keyword.");
    }
  }, [keyword]); 

  useEffect(()=>{
      console.log("both change.");
  }, [counter, keyword]);   
   
  return (
    <div>
      <input type="text" placeholder="Search..." value={keyword} onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
