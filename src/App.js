import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


function Hello() {
  // useEffect(()=>{
  //   console.log("Created :)");
  //   return () => console.log("Destroyed :(");
  // }, []);

  function hiFn(){
    console.log("create :)");
    return byeFn;
  }

  function byeFn(){
    console.log("destroy :(");
  }

  useEffect(hiFn , []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello/> : null}
      <hr/>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
