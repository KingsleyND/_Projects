

import './App.css'
import Student from './students';
import { useState } from 'react';

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal} >{animal}</li>;
      })}
    </ul>
  );
}

function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}





function App() {
  const animals = ["bat","panda"];
  const handleButtonClick = () => {
    window.location.href = "http://www.ign.com";
  };

  const [count, SetCount] = useState(4)
//useState("4") is the initial value of "count"
//"count is the current value"

function decrementCount(){
  return SetCount((prevCount)=> prevCount- 1);
}
function incrementCount(){
  return SetCount(count + 1);
}
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />

      <div>
      <Student name="max " brands={["bmw","Toyota","mazda"]}></Student>
      
      <Button text='CLICKK' handleClick={handleButtonClick}></Button>
    </div>
    <>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
    </>


    </div>
  );
}

export default App


