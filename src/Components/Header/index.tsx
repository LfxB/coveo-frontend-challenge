import React from 'react';

import Searchbar from './Searchbar';

import './index.css';

const Header: React.FC = props => {
  return (
    <header className="header-container">
      S.A.Q.
      <Searchbar />
    </header>
  );
};

export default Header;
