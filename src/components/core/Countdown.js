import React from "react";

import './stepsSlider.css';
class Countdown extends React.Component{
  
  constructor(props)
	{
		super(props);
    console.log(props);
    // props time
    this.state = {minutes:props.minutes,seconds:props.seconds};
		// get title
		// get array of JSX data
		// get call back function to render data
	}

	render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
				<div>
          {this.state.time}
					</div>
		);
	}
}

export default Countdown;