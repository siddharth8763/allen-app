import { useState } from "react";
import cardData from "./card-data.json";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredIndices, setFilteredIndices] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function filterIndeices(arr) {
    setSelectedData(cardData.filter((card) => arr.includes(card.id)));
  }

  function drawHandler() {
    let res = new Set();
    for (let i = 0; i < 5; i++) {
      res.add(randomIntFromInterval(1, 52));
    }

    const set_values = [...res.values()];

    filterIndeices(set_values);
  }

  return (
    <div className="App">
      <button onClick={drawHandler}>Draw Card</button>
      <div className="card-container">
        {selectedData.map((data) => (
          <Card type={data.type} value={data.value} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
