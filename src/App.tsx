import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import SearchMain from './Components/SearchMain';
import HistoryState from './Components/HistoryState';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchMain />
        <HistoryState />
      </div>
    </Router>
  );
};

export default App;
