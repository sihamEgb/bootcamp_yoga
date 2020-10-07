import React from "react";
import { Link } from "react-router-dom";

import WorkoutIcon from './WorkoutIcon';

import workoutApi from '../apis/workoutApi';

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
    <div className="bodyContainer">
			<div className="newWorkoutContainer">
				<Link to='/newworkout' className='item'>Create Workout</Link>
			</div>
      <div className="workoutsContainer">
				All Workouts
				{this.renderWorkouts()}
      </div>
    </div>
    );
  }
}

export default WorkoutsManager;
