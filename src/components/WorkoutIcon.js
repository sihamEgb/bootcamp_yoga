import React from "react";
import { Link } from "react-router-dom";

// import './poseIcon.css';
  
class WorkoutIcon extends React.Component{
	
	constructor(props){
		super(props);
		console.log("props",props);
		// this.state = {video:null};
		// workout_name
		// id
		// arr of steps
		//
	}
  

  
  render(){
		const workout = this.props.workout;
	    return (
				<div 
				className="workoutContainer"
				key={workout.id}
				>
				<Link 
					to={{pathname:`/workouts/${workout.id}`,
					workout: workout}}
				>
					<div className="workoutIconTitle">
						{workout.title}
					</div>
					<div className="poseIconImg">
					{/* <img
						alt={workout.workout_name}
						// className="ui image"
						src={workout.img_url}
      		/> */}
					</div>

				</Link>
      </div>
			);
  }
}

export default WorkoutIcon;
