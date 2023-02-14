import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  //Todo check if the local storage token is valid or not

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
