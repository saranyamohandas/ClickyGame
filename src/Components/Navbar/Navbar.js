import React,{Component} from "react";
//import "./style.css";
import Container from "../Container/Container"

class Navbar extends Component {

	render(){
		return (
		    <nav className="navbar navbar-dark fixed-top bg-primary">
		    <a className="navbar-brand" href="#">Navbar</a>
		    <h2>{this.props.status}</h2>
		    <h2> Score: {this.props.count}  </h2>
		    <h2> Top Score:  </h2>
		     
			</nav>
     )
	}
}


export default Navbar;