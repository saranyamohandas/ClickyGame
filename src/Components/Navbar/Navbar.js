import React,{Component} from "react";
//import "./style.css";
import Container from "../Container/Container"

class Navbar extends Component {

	state : {
		score: 0
	}
	//console.log({this.state.score})


	render(){
		return (
		    <nav className="navbar navbar-dark bg-primary">
		    <a className="navbar-brand" href="#">Navbar</a>
		    <h2> Score:  </h2>
		    <h2> Top Score:  </h2>
		     
			</nav>
     )
	}
}




export default Navbar;