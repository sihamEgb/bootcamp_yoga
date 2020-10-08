import React from "react";
import PoseIcon from '../PoseIcon/PoseIcon';
import yogaData from '../../data/yogaData';

import './PosesManager.css';

class PosesManager extends React.Component {
  constructor(props) {
    super(props);
		this.poses = yogaData.getData();
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
    return (
    <div className="poseManagerContainer">
      <div className="poseManagerContentContainer">
				{this.renderPoses()}
      </div>
    </div>
    );
  }
}

export default PosesManager;
