import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Request } from '../helper/request'

function App() {
  const [results, setResults] = useState([]);
  const [searchBarType, setsearchBarType] = useState('news');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  

  // Select search bar button type 
  const handleClick = (e) => {
    const serachBarButtonId = e.target.id;
    console.log(serachBarButtonId)
    setResults([])
    setsearchBarType(serachBarButtonId)
  }

  const handleMore = () => {
    setCurrentPage(currentPage => currentPage +1) // increment state with hooks 
  }
  
  // API calls
  useEffect(() => {
    Request(results, setResults, searchBarType, setLoading, indexOfFirstResult, indexOfLastResult)
  }, [searchBarType, currentPage]) 

  // Get current results 
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  // const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);



  return (
    <div className="App">
      <SearchBar handleClick={handleClick} />
      <Results results={results} loading={loading} />
      <div className="more-btn" onClick={() => handleMore()} >More</div>
    </div>
  );
}

export default App;
