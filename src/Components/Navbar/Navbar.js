import React,{Component} from "react";
import "./style.css";

class Navbar extends Component {

	render(){
		return (
		    <nav className="navbar fixed-top bg-warning customNav">
			    <a className="navbar-brand" href="#">ClickyGame</a>
			    <h3 id="status">{this.props.status}</h3>
			    <h3> Score: {this.props.count} | Top Score: {this.props.topscore}  </h3>
			    
			 </nav>
     )
	}
}


export default Navbar;