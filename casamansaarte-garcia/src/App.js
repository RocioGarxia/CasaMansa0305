import './App.css';
import Navbar from './COMPONENTS/Navbar';
import ItemListContainer from "./COMPONENTS/ItemListContainer";
import ItemCount from "./COMPONENTS/ItemCount";

/* import Item from "./COMPONENTS/Item";
import ItemList from "./COMPONENTS/ItemList";
import ItemDetail from "./COMPONENTS/ItemDetail";
import ItemDetailContainer from "./COMPONENTS/ItemDetailContainer"; */

import React from 'react';

export default function App() {

  return (
    <div className="App">
  
<Navbar/>
<ItemListContainer/>
<ItemCount stock={10} initial={1}/>
</div>
  )
}
