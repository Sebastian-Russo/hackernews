import React from 'react';
import './pagination.css';

export const Pagination = ({resultsPerPage, totalResults, paginate}) => {
  const pageNumbers = [];
  
  for (let i=1; i<= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <div key={number} className="page-item" onClick={() => paginate(number)}>
              {number}
          </div>
        ))}
      </ul>
    </nav>
  )
}
