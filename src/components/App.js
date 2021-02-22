import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Request } from '../helper/request'
import { Pagination } from './pagination';

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
    setsearchBarType(serachBarButtonId)
  }
  
  // API calls
  useEffect(() => {
    Request(setResults, searchBarType, setLoading, indexOfFirstResult, indexOfLastResult)
  }, [searchBarType, currentPage])

  // Get current results 
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  console.log(indexOfFirstResult, indexOfLastResult)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 


  return (
    <div className="App">
      <SearchBar handleClick={handleClick} />
      <Results results={currentResults} loading={loading} />
      <Pagination resultsPerPage={resultsPerPage} totalResults={500} paginate={paginate} />
    </div>
  );
}

export default App;
