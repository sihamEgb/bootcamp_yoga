import React from "react";
import { Link } from "react-router-dom";

// import PoseIcon from './PoseIcon'
import StepIcon from '../StepIcon/StepIcon';
// CSS
import './Workout.css';


class Workout extends React.Component{
	
	constructor(props){
		super(props);
		this.workout = props.location.workout || [];
	}
	
	renderSteps(){
		if(this.workout.steps)
		{
			return ( this.workout.steps.map(step => {
				return (
					<StepIcon
						key={step.id}
						step={step}
						// poseId={step.poseId}
						// poses = {this.poses}
						>
					</StepIcon>
				);
			})
			);
		}
		return null;
	}

  render(){
		return (
			<div className="workoutContainer">
				<div className="workoutTitle">
					{this.workout.title}
				</div>
				<div className="workoutTime">
					{this.workout.time}
				</div>
				<div className="workoutLevel">
					{this.workout.basic}
				</div>
			<div className="actionsButton">
				<button>Edit</button>
				<button>Delete</button>
				<button>Duplicate</button>
			</div>
			<div className="workoutStepsContainer">
				<div className="workoutStepsContainerTitle">
					all steps
				</div>
				<div>
					{this.renderSteps()}
				</div>
			</div>

			<div>
			<Link className='item'
      to={{
        pathname:'/session' ,
        state: {workout: this.workout}
      }}
      >Start Workout</Link>

			
			</div>
			</div>
		);
  }

}

export default Workout;
