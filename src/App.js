import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import TopChampions from "./components/TopChampions";
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="header">
          <header>The Jungler's Guide</header>
        </div>  
        <h1>Featured Jungle Champions</h1>
        <h2>Here is a list of the current top 10 Jungler's for patch 9.18</h2>
        <TopChampions />
      </div>
    )
  }
}
