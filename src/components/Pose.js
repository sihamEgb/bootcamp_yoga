import React from "react";

import Video from '../utilities/Video';

// APIs
import youtube from '../apis/youtubeApi';
import wikipedia from '../apis/wikipediaApi';
// CSS
import './pose.css';


const apiKey = 'AIzaSyBFK25Z_052fL4LZRScbt9L94HWoFn1Rlw';
class Pose extends React.Component{
	
	
	constructor(props){
		super(props);
		console.log("props",props);
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

		// setResults(data.query.search);
		console.log("term searched",term);
		console.log("wikipedia response",data.query.search);
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
		
    // return response.data.items[0];
    // videos: response.data.items,
    // selectedVideo: response.data.items[0],
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
					<a
					href={`https://en.wikipedia.org?curid=${this.state.data.pageid}`}
					>Read more about {this.state.data.title} in Wikipedia</a>
	
				</div>
			// <div key={this.state.data.pageid} className="item">
			// <div className="right floated content">
			// 	<a
			// 		className="ui button"
			// 		href={`https://en.wikipedia.org?curid=${result.pageid}`}
			// 	>
			// 		Go
			// 	</a>
			// </div>
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
			<div>
				<div>
					{this.pose.english_name}
				</div>
				<div>
					{this.pose.sanskrit_name}
				</div>
				<div className="imageContainer">

				</div>
				<div className="videoContainer">
					{this.renderVideo()}
				</div>
				<div className="externalDataContainer">
					{this.renderData()}
				</div>			
			</div>
		);
  }

}

export default Pose;
