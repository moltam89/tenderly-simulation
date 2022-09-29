import logo from './logo.svg';
import './App.css';
import TenderlySimulation from "./TenderlySimulation";

// Transfer 100 eth from Ethereum Foundation address
const params1 = {
    "chainId": "0x01",
    "value": "0x56BC75E2D63100000",
    "from": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
    "to": "0xc54c244200d657650087455869f1ad168537d3b3",
    "data": ""
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TenderlySimulation params={params1}></TenderlySimulation>
      </header>
    </div>
  );
}

export default App;
