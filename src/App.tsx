import React from 'react';
import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchResults />
    </div>
  );
};

export default App;
