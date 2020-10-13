import React from "react";
import { Link } from "react-router-dom";

import WorkoutIcon from '../WorkoutIcon/WorkoutIcon';

import workoutApi from '../../apis/workoutApi';

import './WorkoutsManager.css';
class WorkoutsManager extends React.Component {
  constructor(props) {
    super(props);
		this.state = {workouts:null};
	}
	componentDidMount(){
		this.getWorkouts();
	}
	getWorkouts(){
		const savedWorkouts = workoutApi.getWorkouts();
		this.setState({workouts:savedWorkouts});
	}
	renderWorkouts(){
		if(this.state.workouts)
		{
			return this.state.workouts.map(workout => {
				return (
				<WorkoutIcon
				key={workout.id}
				workout = {workout}
				>
				</WorkoutIcon>
				);
			});
		}
		return null;
	}
  render() {
    return (
    <div className="workoutManagerContainer">
			
      <div className="workoutsContainer">
				<div className="workoutManagerTitle">
					All Workouts
				</div>
				{this.renderWorkouts()}
      </div>

			<div className="newWorkoutContainer">
				<Link className="createWorkoutLink"
					to='/newworkout' 
					>Add New Workout</Link>
			</div>
    </div>
    );
  }
}

export default WorkoutsManager;
