import { useState, useEffect } from "react";
import './App.css';
import image from './tips.jpg';

function App() {

  const [tips, setTips] = useState("");

  const fetchTips = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");

  const data = await response.json();
  setTips(data.activity);
  };

  useEffect(() => {
fetchTips();
}, []);


  return (
    <div className="App">
      <div className="container">
        <h1>Let's beat boredom</h1>
      </div>
    <div className="box">
      <div className="block">
        <img src={image} alt="sad"/>
      </div>
      <div className="tips">
        <p> {tips} </p>
        <button onClick={fetchTips}>New Tip</button> </div>
      </div>
    </div>
  );
}


export default App;