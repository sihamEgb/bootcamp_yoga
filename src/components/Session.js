import React from "react";
import Slider from '../utilities/MySlider';
import yogaData from '../data/yogaData';

// CSS

class Session extends React.Component{
	
	
	constructor(props){
		super(props);
		// console.log("props",props);
		this.state = {
		
		};
		this.workout = this.props.location.state.workout;

		// this.workout = props.location.workout || [];
		// console.log("the workout",this.workout);
		//id
		//title
		// steps
		// pose id
		// time in seconds
		//steps:[{id:3,time:5},{id:8,time:7},{id:5,time:10},{id:5,time:10}],
		
	}
	
  componentDidMount(){
	
	}
	
	renderSteps = () => {
		if(this.workout.steps)
		{
				return this.workout.steps.map( (step,index) => {
					console.log("rendering step",step);
					return (
						<div className="stepContainer"
						key = {index}
						>
							{step.id}
							<div className="poseContainer">
								gsniogoi
							</div>
							{/* {step.time} */}
						</div>
					);
				});
		}
		return null;
	}
  render(){
		return (
			<div>
				<div>
					<Slider
						title = "workout steps"
						steps = {this.workout.steps}
						renderData = {this.renderSteps}
					>
					</Slider>
				</div>

			</div>
		);
  }

}

export default Session;
