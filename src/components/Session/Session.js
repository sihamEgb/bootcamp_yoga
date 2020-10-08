import React from "react";
// import Slider from '../core/MySlider';
import yogaData from '../../data/yogaData';
import Countdown from "react-countdown";

// import yogaApi from "../../apis/yogaApi";

// CSS

class Session extends React.Component{
	
	
	constructor(props){
		super(props);
		// console.log("props",props);
		this.state = {
			currentStepIndex:0,
			isWorkoutComplete:false,
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
	onStepComplete = () => {
		console.log("step complete");
		// we finished the workout
		if(this.state.currentStepIndex === this.workout.steps.length)
		{
			this.setState({isWorkoutComplete:true});
		}
		else
		{
			this.setState({currentStepIndex:this.state.currentStepIndex+1});
		}
	}
	
  render(){
		const currentStep = this.workout.steps[this.state.currentStepIndex];
		const currentPose = yogaData.getPoseById(currentStep.id);
		const time = currentStep.time * 1000 + Date.now();
		if(this.state.isWorkoutComplete)
		{
			return (
				<div>
					<div>Thanks for today</div>
					<div>Go to Homepage?</div>
					<div>Go to Workouts?</div>
				</div>
			);
		}
		return (
			<div>
				<div className="title">
						workout steps
				</div>
				<div className="countdownContainer">
				<Countdown 
							key = {currentStep.id}
							date={time} 
							precision={1}
							onComplete={this.onStepComplete}
				/>,
				</div>
				<div className="poseContainer">
						<div>{currentPose.english_name}</div>
						<img
								alt={currentPose.english_name}
								// className="ui image"
								src={currentPose.img_url}
      					/>
				</div>

			</div>
		);
  }

}

export default Session;
