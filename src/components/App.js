import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Request } from '../helper/request'

function App() {
  const [items, setItems] = useState([]);

  // API calls
  useEffect(() => {
    Request(items, setItems)
  }, [])

  return (
    <div className="App">
      <SearchBar />
      <Results results={items} />
    </div>
  );
}

export default App;
