import React, { Component }from "react";
import img1 from "../../images/img1.png"
//import img15 from "../../images/img15.png"
import img2 from "../../images/img2.png"
// import img5 from "../../images/img5.jpg"
// import img6 from "../../images/img6.jpg"
import img15 from "../../images/img15.png"
import clipart from "../../images/clipart-burger.png"
import img7 from "../../images/img7.png"

import "./style.css";
//import img1 from "./img1.jpg"
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }


// const images = importAll(require.context('./images', false, '/\.(png | jpg)$/'));

// <img src={images['0.png']} />

let imageSrc = [img1,img2,img15,img7];
class Image extends Component{

	state = {
		clicked: false

	};

	handleClick = (event) => {
        //define target as key
        const targetKey = event.target.dataset.clicked;

        alert(event.target.dataset.clicked);


        // define value for key
		this.setState({clicked : true})
		
		console.log('The link was clicked.');
	}
	render() {
	 return (
      imageSrc.map((data,idx) =>
   	
      <img className="jumbotron jumbotron-fluid imgDisplay img-thumbnail" key={idx} src={data} data-clicked={this.state.clicked} onClick={this.handleClick.bind(this)}/>
      )
      )


	}
}


// function Image(){
// 	return (
//    imageSrc.map((data) =>
   	
//     <img className="jumbotron jumbotron-fluid imgDisplay img-thumbnail" src={data} onClick={handleClick}/>
	
//     )
//      )


// }

export default Image;