import React from "react";
import { Link } from "react-router-dom";

// import './poseIcon.css';
import yogaData from '../data/yogaData';
class StepIcon extends React.Component{
	
	// gets the poseId and poses array
	constructor(props){
		super(props);
		this.pose = yogaData.getPoseById(props.step.id);
		// english_name
		// sanskrit_name
		// id
		// img_url
	}
	
	
	
  onPoseIconClick(){
		console.log("step clicked");
		// no routing just viewing
	}
  // make it look better
  render(){
		const step = this.props.step;
	    return (
				<div 
				className="stepIconContainer"
				key={step.id}
				>
				<div>
						<div className="poseIconImg">
						<img
							alt={this.pose.english_name}
							// className="ui image"
							src={this.pose.img_url}
						/>
						</div>

				</div>
			</div>
			);
  }
}

export default StepIcon;
