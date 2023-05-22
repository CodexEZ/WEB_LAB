import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Link, Route, browserHistory, IndexRoute, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='navbar'>
        
          <div><Link to = "/">Home</Link></div>
          <div><Link to = "/About">About</Link></div>
          <div><Link to = "/Contact">Contact</Link></div>
        <Routes>
                 <Route exact path='/' Component={Home}></Route>
                 <Route exact path='/About' Component={About}></Route>
                 <Route exact path='/Contact' Component={Contact}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
class Home extends React.Component{
  render(){
    return(
      <div>

    <h1>Home</h1>
      </div>
    )
  }
}


class About extends React.Component{
  render(){
    return(
      <div>
        <h1>
          About
        </h1>
      </div>
    )
  }
}


class Contact extends React.Component{
  render(){
    return (
      <div>
        <h1>
          Contact
        </h1>
      </div>
    )
  }
}

