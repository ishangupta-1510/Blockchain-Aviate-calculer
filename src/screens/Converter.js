import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './Converter.css';
import axios from 'axios';
  

function App() {
  const [currValues, setcurrValues] = useState({});
  const [options, setOptions] = useState([]);
  const [currencyF, setCurrencyF] = useState('USD');
  const [currencyT, setCurrencyT] = useState('INR');
  const [input, setInput] = useState(0);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    axios.get("https://blockchain.info/ticker")
    .then((res) => {
      setcurrValues(res.data);
      //console.log(res.data['ARS']);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  useEffect(() => {
    setOptions(Object.keys(currValues));
  }, [currValues]);
  try {
    var From = currValues[currencyF].last;
    var To = currValues[currencyT].last;
  }
  catch(err) {
    
  }
  return (
    <div className='back'>

    <div className="Apps" id="converter">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown
            placeholder="From" label="Select currency"
            options={options}
            value={currencyF}
            onChange={(e) => {setCurrencyF(e.value)}}
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" />
        </div>

        <div className="right">
          <h3>To</h3>
          <Dropdown
           placeholder="To" 
           options={options} 
           value={currencyT}
           onChange={(e) => {setCurrencyT(e.value)}} 
          />
          
        </div>
      </div>
      <div className="result">
        <button onClick={(e) => {setRate(To/From)}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{input*rate}</p>
      </div>
    </div>
    </div>
  );
}
  
export default App;