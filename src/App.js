import React from 'react';
import './App.css';
import Header from './components/Header';
import HighlightsPanel from "./components/HighlightsPanel"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <HighlightsPanel />
      <Footer />
    </div>
  );
}

export default App;
