import React from "react";
import { Link } from "react-router-dom";

// import PoseIcon from './PoseIcon'
import StepIcon from './StepIcon';
// CSS
// import './pose.css';


class Workout extends React.Component{
	
	constructor(props){
		super(props);
		// this.poses = this.props.location.state.poses;
		this.steps = props.location.workout.steps || [];

		console.log("workout poses",this.poses);
		console.log(props);
		// TO DELETE
		// this.workout = {
		// 	id:2,
		// 	title:'Level Up',
		// 	// each step 
		// 	// pose id
		// 	// time in seconds
		// 	steps:[{id:1,poseId:2,time:5},{id:2,poseId:8,time:7},{id:3,poseId:4,time:10},{id:4,poseId:10,time:10}],
		// }
		// console.log("props",this.workout);
		this.workout = props.location.workout || [];

		this.state = {
		
		};
	
	}
	
	renderSteps(){
		if(this.workout.steps)
		{
			console.log("in render steps",this.workout.steps)
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
			<div>
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
			<div>
				<div>
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
