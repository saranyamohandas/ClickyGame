import React, { Component } from "react";
import "./style.css";


class Image extends Component {
	render(){
		return(
			<img className="jumbotron jumbotron-fluid imgDisplay img-thumbnail" key={this.props.id} src={this.props.src} data-clicked={this.props.clicked}  onClick={() => this.props.handleClick(this.props.id)}/>

			)
	}
}

export default Image;