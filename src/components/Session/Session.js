import React from "react";
import { Link } from "react-router-dom";
// import Slider from '../core/MySlider';
import yogaData from '../../data/yogaData';
import Countdown from "react-countdown";
import './Session.css';
// import yogaApi from "../../apis/yogaApi";

// CSS

class Session extends React.Component{
	
	constructor(props){
		super(props);
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
		if(this.state.currentStepIndex === this.workout.steps.length-1)
		{
			this.setState({isWorkoutComplete:true});
		}
		else
		{
			this.setState({currentStepIndex:this.state.currentStepIndex+1});
		}
	}
	
  render(){
		console.log("in render",this.state.isWorkoutComplete);
		if(this.state.isWorkoutComplete)
		{
			return (
				<div>
					<div className="sessionFinishTitle">Thanks for today</div>
					<div className="SessionActionContainer">
						<Link 
							className='header-logo header-nav-item'
							to='/' 
						>
								Homepage
						</Link>
						<Link 
          		className='header-nav-item'
              to={{
                pathname:'/workouts' ,
                // state: {poses: props.poses}
              }}
          	>
								More Workouts
						</Link>

					</div>
				</div>
			);
		}
		const currentStep = this.workout.steps[this.state.currentStepIndex];
		const currentPose = yogaData.getPoseById(currentStep.id);
		const time = currentStep.time * 1000 + Date.now();
		return (
			<div className="sessionCardContainer">
				<div className="sessionTitle">
						{this.workout.title}
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
						<img className="imageContainer"
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
