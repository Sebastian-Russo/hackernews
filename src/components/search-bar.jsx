import React, { useState } from 'react';
import './search-bar.css';

export const SearchBar = () => {


  return (
    <div className="search-bar-wrapper">
      <div className="logo">Y</div>
      <div>Hacker News</div>
      <div><a href="" className="search-bar-btn">new</a></div>
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">post</a></div>
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">comments</a></div>
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">ask</a></div>
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">show</a></div>  
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">jobs</a></div>  
      <div className="vl"></div>
      <div><a href="" className="search-bar-btn">submit</a></div>    
    </div>
  )
}