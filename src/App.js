import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Image from "./components/Image/Image";
import Footer from "./components/Footer";
import images from "./imageList.json"
import Container from "./components/Container/Container";



class App extends Component {
	state = {
    images,
    counter : 0,
    status : "",
    correctGuess : 0 ,
    topScore : 0

  };

  handleClick = id => {
   
    const updateImages = this.state.images.map(image => {
    	if(image.id === id) {
    		if(!image.clicked) {
    			image.clicked = true;
          this.setState({correctGuess : this.state.correctGuess + 1})
	    		this.setState({counter : this.state.counter + 1})
	    		this.setState({status : "You guessed correctly!"})
	    		console.log("status",this.state.status);
	    		console.log("counter",this.state.counter);
          this.updateTopScore();
    		} else if (this.state.correctGuess >= 9){
          this.setState({status : "All images clicked!"})
          this.updateTopScore();

        } else {
    			
    			// const newTopScore = this.state.topScore < this.state.counter ? this.state.counter: this.state.topScore;
       //          this.setState({topScore : newTopScore})
       //          console.log("top",this.state.topScore);
	    		this.setState({counter : 0})
	    		this.setState({status : "You guessed it wrong!"})
          this.updateTopScore();
    	}
      // const newTopScore = this.state.topScore < this.state.counter ? this.state.counter: this.state.topScore;
      //           this.setState({topScore : newTopScore})
      //           console.log("top",this.state.topScore);

    }
}
);

    
    const shuffleImages = this.state.images.map(image => {
    	let i,j,temp;
    	for(i=this.state.images.length-1;i>0;i--){
    		j = Math.floor(Math.random() * (i + 1));
	        temp = this.state.images[i];
         // this.setState({images[i] : this.state.images[j]})
	        this.state.images[i] = this.state.images[j];
          //this.setState({images[j] : temp})
	        this.state.images[j] = temp;
    	}

    }
    )

    this.setState(images);
     
  };

  updateTopScore = () => {

    const newTopScore = this.state.topScore < this.state.counter ? this.state.counter: this.state.topScore;
              this.setState({topScore : newTopScore})
              console.log("top",this.state.topScore);
  }



  render() {
  	return (
    	 <div> 
  	      <Navbar count={this.state.counter} status={this.state.status} topscore={this.state.topScore}/>
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
