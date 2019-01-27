import React, { Component } from "react";
// import images from "./imageList.json"
// import img1 from "../../images/img1.png"
// //import img15 from "../../images/img15.png"
// import img2 from "../../images/img2.png"
// // import img5 from "../../images/img5.jpg"
// // import img6 from "../../images/img6.jpg"
// import img15 from "../../images/img15.png"
// import clipart from "../../images/clipart-burger.png"
// import img7 from "../../images/img7.png"

import "./style.css";

function Image(props){
	return (
        	
      <img className="jumbotron jumbotron-fluid imgDisplay img-thumbnail" key={props.id} src={props.src} data-clicked={props.clicked}  onClick={() => props.handleClick(props.id)}/>
      
      )
}

// let imageSrc = [img1,img2,img15,img7];
// class Image extends Component{

// 	state = {
// 		images

// 	};

// 	handleClick = (event) => {
//         //define target as key
//         //const targetKey = event.target.dataset.clicked;
//         const target = this.state.clicked;
//         console.log("target",target)
//         alert(event.target.dataset.clicked);
        
        
//         // define value for key
// 		//this.setState({target.clicked : true})
// 		this.setState({clicked: true})
		
// 		console.log('The link was clicked.');
// 	}
// 	render() {
// 	 return (
//       this.state.images.map((data,idx) =>
   	
//       <img className="jumbotron jumbotron-fluid imgDisplay img-thumbnail" key={idx} src={data} data-clicked={this.state.clicked} onClick={this.handleClick}/>
//       )
//       )


// 	}
// }


export default Image;