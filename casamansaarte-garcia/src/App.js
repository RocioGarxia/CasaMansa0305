import './App.css';
import Navbar from './COMPONENTS/Navbar';
import ItemListContainer from "./COMPONENTS/ItemListContainer";
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
  
<Navbar/>
<ItemListContainer>
  <h1>Casa Mansa: A todo ponéle arte</h1>
</ItemListContainer>
</div>
  )
}

function Contador() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <span>El contador está a {count}</span> 
      <button onClick={() => setCount(count + 1)}>
        Incrementar contador
      </button>
    </div>
  )
}

export default App;
