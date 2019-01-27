import React, { Component } from "react";
import Image from "../Image/Image"
import "./style.css";
import images from "../../imageList.json"
//import img1 from "../../images/img1.png"

class Container extends Component {
  // Setting this.state.friends to the friends json array
  //same as friends : friends
  //when defining object properties with ES6, 
  //if the object's key and value have the same name, 
  //we can omit the colon — this is just an optional shorthand syntax.
  state = {
    images
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //We include only friends with an id property not equal to the id being received into this method. 
    const updateImages = this.state.images.map(image => {
    	if(image.id == id){
    		image.clicked = true;
    		console.log("updated",updateImages)
    	}
    	alert(id + "is clicked")
       console.log(this.state.images);
       console.log("images",images);
       console.log(id);
      //this.setState(images);;

    }
    
    	);
    this.setState(images);
    // Set this.state.friends equal to the new friends array
    //when we update our component's state by removing one of the friend objects, our component re-renders itself.
    //this.setState({ images });
       
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  //whenever we map over a list of data and return JSX, 
  //React wants us to give each element a unique key prop. React uses this value internally to help it efficiently render 
  //and re-render components from arrays of data.

  //the key prop is unusual because it's used by React but 
  //isn't actually available for us to use inside of the component we pass it to. We pass the friend id in as a separate prop because we'll need it inside of the FriendCard component.
  render() {
    return (
      <div className="position">
       
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
         </div>
      
    );
  }
}




// function Container() {
//   return (
//     <div className="position">
//       <Image/>
//     </div>
//   );
// }

export default Container;