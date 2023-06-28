import React from 'react';
import './App.css';
import HeaderBar from './component/HeaderBar';
import IntroBlock from './component/IntroBlock';
import EntryList from './component/EntryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar/>
      </header>
      <main className="App-body">
        <IntroBlock/>
        <EntryList/>
      </main>
    </div>
  );
}

export default App;
