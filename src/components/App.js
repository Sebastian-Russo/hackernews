import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Request } from './helper/request'

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState();

  const handleChange = val => {
    setInput(val)
  }
  // console.log(input)
  // console.log(results)

  // API calls
  // call useEffect here, calls Request(), put results in useEffect

  useEffect(() => {
    Request()
  }, [])


  return (
    <div className="App">
      <SearchBar handleChange={handleChange}/>
      <Results results={results} />
    </div>
  );
}

export default App;
