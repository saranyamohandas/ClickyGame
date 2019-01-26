import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image";
//import img1 from "./images/img1.jpg"
import Footer from "./components/Footer";

import Container from "./components/Container/Container";
//import "./images"
import './App.css';

//console.log(img1);


function App(){
  return (

  	 // <img className="jumbotron jumbotron-fluid" src={img1}/>
  	      <div> 
  	      <Navbar/>
          <Jumbotron/>
          <Container/>
          
          
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
