import React from "react";
import './Button.css';
class Button extends React.Component{
  
  constructor(props)
	{
		super(props);
    console.log(props);
		this.state = {};
		// props
		// label , callback 
	}

	render() {
    
    return (
			<button
				onClick={this.props.onButtonClick}
			>
				{this.props.label}
			</button>
		);
	}
}

export default Button;