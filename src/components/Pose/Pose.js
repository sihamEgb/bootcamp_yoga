import React from "react";

import Video from '../core/Video';

// APIs
import youtube from '../../apis/youtubeApi';
import wikipedia from '../../apis/wikipediaApi';
// CSS
import './Pose.css';

const apiKey = 'AIzaSyBFK25Z_052fL4LZRScbt9L94HWoFn1Rlw';
class Pose extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			video:null,
			data:null,
		};
		this.pose = props.location.pose || [];
		// english_name
		// sanskrit_name
		// id
		// img_url
	}
	

	getWikipediaData = async() => {
		const term = `${this.pose.sanskrit_name} ${this.pose.english_name} pose yoga`;
    const {data} = await wikipedia.get('', {
			params: {
				action:'query',
				list:'search',
				origin: '*',
				srsearch:term,
				format: 'json',
      },
		});
	  this.setState({data:data.query.search[0]});
		
	}
  getVideoData = async() => {
	
    const term = 'yoga pose';
    const response = await youtube.get('/search', {
      params: {
        q: `${term} ${this.pose.english_name}`,
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        key: apiKey,
      },
    });
    console.log(response.data.items[0]);
    this.setState({video:response.data.items[0]});
	  }
  componentDidMount(){
		this.getVideoData();
		this.getWikipediaData();
	}
	renderData(){
		if(this.state.data)
		{
			return (
				<div
				key={this.state.data.pageid}
				className = "data"
				>
					<a className="poseLink"
					href={`https://en.wikipedia.org?curid=${this.state.data.pageid}`}
					>Read more about {this.state.data.title} in Wikipedia</a>
	
				</div>
			);
		}
		return null;
	}
	renderVideo(){
    if(this.state.video)
    {
      return (
          <div>
            Pose
            <Video
             key={this.state.video.id.videoId}
             onVideoSelect={this.onVideoSelect}
             video={this.state.video}
            >
            </Video>
           
          </div>
        );
		}
		return null;
	}
  
  render(){
		return (
			<div className="poseContainer">
				<div className="imageContainer">
					<img
						alt={this.pose.english_name}
						// className="ui image"
						src={this.pose.img_url}
      		/>
				</div>
				<div className="poseTitle">
					{this.pose.english_name}
				</div>
				<div className="poseSubtitle">
					{this.pose.sanskrit_name}
				</div>
				
				<div className="poseVideoContainer">
					{this.renderVideo()}
				</div>
				<div className="poseExternalDataContainer">
					{this.renderData()}
				</div>			
			</div>
		);
  }

}

export default Pose;
