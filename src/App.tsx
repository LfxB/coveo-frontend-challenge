import React from 'react';
import Header from './Components/Header';
import SearchMain from './Components/SearchMain';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchMain />
    </div>
  );
};

export default App;
