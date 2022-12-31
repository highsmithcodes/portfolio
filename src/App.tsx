import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'


const App: React.FC = () => {
  return (
    <div className="App">
      <div id="cursor-circle" className="cursor-in"></div>

      <Layout />
    </div>
  );
}

export default App;
