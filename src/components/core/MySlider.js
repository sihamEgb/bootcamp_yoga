import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './stepsSlider.css';
class MySlider extends React.Component{
	constructor(props)
	{
		super(props);
		console.log(props);
		// get title
		// get array of JSX data
		// get call back function to render data
	}

	renderData = () => {
		console.log("rendering data");
		return this.props.renderData();

		// return this.props.steps.map( (step,index) => {
		// 	return (
		// 		<div className="stepContainer"
		// 		key = {index}
		// 		>
		// 			{step.id}		
		// 			{/* {step.time} */}
		// 		</div>
		// 	);
		// });
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
					<h2> {this.props.title} </h2>
					<div className="sliderContainer">
						<Slider {...settings}>
							{this.renderData()}
						</Slider>
					</div>
				</div>
		);
	}
}

export default MySlider;