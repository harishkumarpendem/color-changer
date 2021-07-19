import React, { useState } from 'react';
import "./App.css";
import Button from './components/Button.js';
const initialState = [
  {name:'red', color:'red'},
  {name:'blue', color:'blue'},
  {name:'reset', color:'white'}
]
function App() {
  const [state,setState] = useState('white');
  const colorHandler = (value) => {
    setState(value)
  }

  return (
    <div className="App">
      <h1 className='main-text'>Click on the Button to change the Block color</h1>
      <h1 className = 'sub-text'>color changed to <span className = {`textColor-${state}`}>{state.toUpperCase()}</span></h1>
      <div className={`color ${state}`}></div>
      <div className = 'buttons'>
      {initialState.map((ele,index)=><Button key={index} name={ele.color} color={ele.color} click={()=>colorHandler(ele.color)}>{ele.name}</Button>)}
      </div>
    </div>
  );
}

export default App;
