import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Contador Simples</h1>
      <p>Valor atual: {contador}</p>
      <div>
        <button onClick={() => setContador(contador + 1)}>+1</button>
        <button onClick={() => setContador(contador - 1)}>-1</button>
        <button onClick={() => setContador(0)}>Resetar</button>
      </div>
    </div>
  );
}

export default App;
