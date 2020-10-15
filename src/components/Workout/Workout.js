import React from "react";
import { Link } from "react-router-dom";
import workoutApi from "../../apis/workoutApi"
// import PoseIcon from './PoseIcon'
import StepIcon from '../StepIcon/StepIcon';
import Button from '../core/Button';
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
	editWorkout(){
		console.log("editing the workout");
	}
	deleteWorkout = () => {
		workoutApi.deleteWorkout(this.workout.id);
	}
  render(){
		return (
			<div className="workoutWorkoutContainer">
				<div className="workoutTitle">
					Workout: {this.workout.title}
				</div>
				{/* <div className="workoutTime">
					{this.workout.time}
				</div> */}
				<div className="workoutLevel">
					{this.workout.basic}
				</div>
			<div className="workoutActionsButton">
				<Button
					label = "Edit"
					onButtonClick={()=>{console.log("button clicked")}}
				/>
					<Button
					label = "Delete"
					onButtonClick={()=>{console.log("button clicked")}}
				/>
					<Button
					label = "Duplicate"
					onButtonClick={()=>{console.log("button clicked")}}
				/>

			</div>
			<div className="workoutStepsContainer">
				<div className="workoutStepsContainerTitle">
					Workout Steps
				</div>
				<div className="workoutStepsImagesContainer">
					{this.renderSteps()}
				</div>
			</div>

			<div className="workoutActionContainer">
			<Link 
				className='workoutStartActionContainer'
				to={{
					pathname:'/session' ,
					state: {workout: this.workout}
				}}
      >Start</Link>

			
			</div>
			</div>
		);
  }

}

export default Workout;
