import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer";
import './App.css';


function App(){
  return (<div> 
  	      <Navbar/>
          <Jumbotron/>
          <Footer/>
          </div>

  	)
}

// class App extends Component {
//   render() {
//     return (


//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>
//     );
//   }
// }

export default App;
