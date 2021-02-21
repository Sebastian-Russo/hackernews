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
  const [resultsPerPage, setPostsPerPage] = useState(3);
  

  // Select search bar button type 
  const handleClick = (e) => {
    const serachBarButtonId = e.target.id;
    console.log(serachBarButtonId)
    setsearchBarType(serachBarButtonId)
  }
  
  // API calls
  useEffect(() => {
    Request(results, setResults, searchBarType, setLoading)
  }, [searchBarType])

  // Get current results 
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstPost = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstPost, indexOfLastResult);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); 


  return (
    <div className="App">
      <SearchBar handleClick={handleClick} />
      <Results results={currentResults} loading={loading} />
      <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} paginate={paginate} />
    </div>
  );
}

export default App;
