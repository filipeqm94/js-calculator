import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='display'>125</div>
        <button className='clear'>Clear</button>
        <div className='whiteSpace'></div>
        <button className='division'>&#247;</button>
        <button className='multiply'>&#215;</button>
        <button className='add'>+</button>
        <button className='subtract'>-</button>
        <button className='equal'>=</button>
        <button className='one'>1</button>
        <button className='two'>2</button>
        <button className='three'>3</button>
        <button className='four'>4</button>
        <button className='five'>5</button>
        <button className='six'>6</button>
        <button className='seven'>7</button>
        <button className='eight'>8</button>
        <button className='nine'>9</button>
        <button className='zero'>0</button>
        <button className='decimal'>.</button>
      </div>
    );
  }
}
