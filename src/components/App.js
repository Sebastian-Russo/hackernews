import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Request } from '../helper/request'

function App() {
  const [items, setItems] = useState([]);
  const [searchBarItems, setSearchBarItems] = useState('news');

  // API calls
  useEffect(() => {
    Request(items, setItems, searchBarItems)
  }, [searchBarItems])

  const handleClick = (e) => {
    const serachBarButtonId = e.target.id;
    console.log(serachBarButtonId)
    setSearchBarItems(serachBarButtonId)
  }

  return (
    <div className="App">
      <SearchBar handleClick={handleClick} />
      <Results results={items} />
    </div>
  );
}

export default App;
