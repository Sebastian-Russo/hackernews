import React from 'react';
import './search-bar.css';

export const SearchBar = ({handleClick}) => {


  return (
    <div className="search-bar-wrapper">
      <div id="news" onClick={(e) => handleClick(e)} className="logo">Y</div>
      <div id="news" onClick={(e) => handleClick(e)} className="logo-name">Hacker News</div>
      <div id="news" onClick={(e) => handleClick(e)} className="search-bar-btn">new</div>
      <div className="vl"></div>
      {/* <div id="past" onClick={(e) => handleClick(e)} className="search-bar-btn">past</div> */}
      {/* <div className="vl"></div> */}
      {/* <div id="comments" onClick={(e) => handleClick(e)} className="search-bar-btn">comments</div> */}
      {/* <div className="vl"></div> */}
      <div id="ask" onClick={(e) => handleClick(e)} className="search-bar-btn">ask</div>
      <div className="vl"></div>
      <div id="show" onClick={(e) => handleClick(e)} className="search-bar-btn">show</div>  
      <div className="vl"></div>
      <div id="jobs" onClick={(e) => handleClick(e)} className="search-bar-btn">jobs</div>  
    </div>
  )
}