const savedWorkout1 = {
	id:1,
	title:'welcome to yoga',
	// each step 
	// pose id
	// time in seconds
	steps:[{id:1,poseId:2,time:5},{id:2,poseId:8,time:7},{id:3,poseId:4,time:10},{id:4,poseId:10,time:50},{id:5,poseId:10,time:10}],
}
const savedWorkout2 = {
	id:2,
	title:'Level Up',
	// each step 
	// pose id
	// time in seconds
	steps:[{id:1,poseId:2,time:5},{id:2,poseId:8,time:7},{id:3,poseId:4,time:10},{id:4,poseId:10,time:10}],
}
const savedWorkout3 = {
	id:3,
	title:'Temp',
	// each step 
	// pose id
	// time in seconds
	steps:[{id:1,poseId:2,time:5},{id:2,poseId:8,time:7}],
}
const savedWorkout4 = {
	id:4,
	title:'Temp2',
	// each step 
	// pose id
	// time in seconds
	steps:[{id:1,poseId:2,time:5},{id:2,poseId:8,time:7}],
}
const workouts = [savedWorkout1,savedWorkout2,savedWorkout3,savedWorkout4];

// get data from storage
// function initData(){
// }
function deleteWorkout(id){
	
	for(let i=0;i<workouts.length;i++)
	{
		if(workouts[i].id=== id)
		{
			workouts.splice(i,1);
		}
	}
}
function getWorkouts(){
	return workouts;
}
function getWorkoutById(id){
	for(let i=0;i<workouts.length;i++)
	{
		if(workouts[i].id === id)
		{
			return workouts[i];
		}
	}
	return null;
}

function setNewWorkout(newWorkout){
	workouts.push(newWorkout);
}
// edit workout by id
function editWorkout(editedWorkout){
	for(let i=0;i<workouts.length;i++)
	{
		if(workouts[i].id === editedWorkout.id)
		{
			workouts[i] = editedWorkout;
			return true;
		}
	}
	return false;
}

module.exports = {
	getWorkouts,
	deleteWorkout,
	getWorkoutById,
	setNewWorkout,
	editWorkout
};