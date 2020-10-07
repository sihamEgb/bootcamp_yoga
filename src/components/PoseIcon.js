import React from "react";
import { Link } from "react-router-dom";

import './poseIcon.css';
import yogaData from '../data/yogaData';
class PoseIcon extends React.Component{
	
	// gets the poseId and poses array
	constructor(props){
		super(props);
		console.log("props",props);
		this.pose = yogaData.getPoseById(props.poseId);
		this.poses = yogaData.getData();
		// english_name
		// sanskrit_name
		// id
		// img_url
	}
	
  onPoseIconClick(){
		console.log("icon clicked");
	}
  
  render(){
		const pose = this.pose;
	    return (
				<div 
				className="poseIconContainer"
				key={pose.id}
				>
				<Link 
					to={{pathname:`/poses/${pose.id}`,
					pose: pose}}
				>
					<div className="poseIconTitle">
						{pose.english_name}
					</div>
					<div className="poseIconImg">
					<img
						alt={pose.english_name}
						// className="ui image"
						src={pose.img_url}
      		/>
					</div>

				</Link>
      </div>
			);
  }
}

export default PoseIcon;
