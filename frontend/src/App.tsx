import "./App.css";
import { useState } from "react";
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [ans, setAns] = useState(null);


    const ansFetcher = async () => {
      const response = await fetch(
        `http://localhost:4000/find-sum?a=${a}&&b=${b}`
      );
      const data = await response.json();
      setAns(data.result)
    };
   
 

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>The magic game</h1>
      <input
        type="number"
        placeholder="Enter a number to see a magic"
        onChange={(e) => setA(e.target.valueAsNumber)}
      />
      <input
        type="number"
        placeholder="Enter a number to see a magic"
        onChange={(e) => setB(e.target.valueAsNumber)}
      />
      <button onClick={ansFetcher}>Submit</button>
      {ans && <div>The Answer is: {ans}</div>}
    </div>
  );
}

export default App;
