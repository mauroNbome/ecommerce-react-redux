import React from 'react';
import Header from './components/Header'
import Homepage from '../src/pages/homepage';
import './default.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        
        <Homepage />
      </div>
    </div>
  );
}

export default App;
