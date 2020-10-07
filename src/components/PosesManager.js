import React from "react";
// import Button from './Button';
// import '../css/flashcards.css'
import PoseIcon from './PoseIcon';
import yogaData from '../data/yogaData';

class PosesManager extends React.Component {
  constructor(props) {
    super(props);
		console.log(props);
		//cards:this.props.location.state.cards,
		this.poses = yogaData.getData();
		//this.props.location.state.poses;
		console.log("poses",this.poses);
		// this.state = {};
	}
	
	renderPoses(){
		return this.poses.map(pose => {
			return (
			<PoseIcon
			key={pose.id}
			poseId={pose.id}
			poses = {this.poses}
			>
			</PoseIcon>
			);
		});
	}
  render() {
		console.log("bla");
    return (
    <div className="bodyContainer">
      <div className="actionContainer">
				{this.renderPoses()}
      </div>
    </div>
    );
  }
}

export default PosesManager;
