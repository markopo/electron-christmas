import React from 'react';
import './App.css';
import Title from "./Title";

function App() {

    // const p = fetch('https://google.com').then(x => x);
    // console.log('App: ', p);

  return (
    <div className="App">
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <Title  />
        <img style={{ zIndex: 100 }} alt='Rovaniemi Finland' src='rovaniemi-lapland-finland.jpg' />
      </div>
    </div>
  );
}

export default App;
