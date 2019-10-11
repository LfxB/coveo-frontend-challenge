import React from 'react';

import Searchbar from './Searchbar';

import './index.css';

const Header: React.FC = props => {
  return (
    <header className="header-container">
      <div className="header-title">SAQ</div>
      <Searchbar />
      <div className="header-filter-button">
        <div className="filter-open"></div>
      </div>
    </header>
  );
};

export default Header;
