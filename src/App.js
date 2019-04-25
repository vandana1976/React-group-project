import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Bookshelves from './components/Bookshelves';
import Navigation from './components/Navigation';
import Buy from './components/BuyBook';





class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <Navigation/>
      <Route path="/" component={Home} exact  />
      <Route path="/bookshelf" component={Bookshelves} />
      <Route path="/buy" component={Buy} />
      </BrowserRouter>
    )
  }
}


export default App;