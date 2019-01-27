import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image";

import Footer from "./components/Footer";

import images from "./imageList.json"
import Container from "./components/Container/Container";

import './App.css';


class App extends Component {
	state = {
    images,
    counter : 0,
    status : "Click an emoticon to begin!"
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //We include only friends with an id property not equal to the id being received into this method. 
    const updateImages = this.state.images.map(image => {
    	if(image.id === id) {
    		if(!image.clicked) {
    			image.clicked = true;
	    		this.setState({counter : this.state.counter + 1})
	    		this.setState({status : "You guessed correctly!"})
	    		console.log("status",this.state.status);
	    		console.log("counter",this.state.counter);
    		} else {
	    		this.setState({counter : 0})
	    		this.setState({status : "You guessed it wrong!"})
    	}
    }
}
)

    
    const shuffleImages = this.state.images.map(image => {
    	let i,j,temp;
    	for(i=this.state.images.length-1;i>0;i--){
    		j = Math.floor(Math.random() * (i + 1));
	        temp = this.state.images[i];
	        this.state.images[i] = this.state.images[j];
	        this.state.images[j] = temp;
    	}

    }
    )

    //this.setState({counter : this.state.counter + 1})
    this.setState(images);
    console.log("Counter",this.state.counter);
    
  };



  render() {
  	return (
    	 <div> 
  	      <Navbar count={this.state.counter} status={this.state.status}/>
          <Jumbotron />
          <Container>
          {this.state.images.map(data => (
          <Image
            handleClick={this.handleClick}
            id={data.id}
            key={data.id}
            name={data.name}
            src={data.src}
            clicked={data.clicked}
            />
          ))}
            
            </Container>
          
          
          <Footer/>
          </div>
          );
  }
}

export default App;
