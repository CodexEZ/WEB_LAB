
import './App.css';
import React from 'react';

function App() {
  const [state, setState] = React.useState(0);
  function increment(){
    setState (state + 1)
  }
  return (
    <div>
      <Home name ="This is the the first component in react file"></Home>
      <About name = "This the second component of react, this message is displayed using props"></About>
      <h2>This is counter , its value increases by clicking the button below =>{state}</h2>
      <button onClick={increment}>Click to increment</button>
    </div>
  );
}

export default App;
function Home(props){
  return(
    <div>
        <ul>
            <li>
            <h1>Component 1</h1>
            <h3>{props.name}</h3>
            </li>
        </ul>
    </div>
)
}
function About(props){
  return(
    <div>
        <ul>
            <li>
                <h1>Component 2</h1>
                <h3>{props.name}</h3>
            </li>
        </ul>
    </div>
  )
}
