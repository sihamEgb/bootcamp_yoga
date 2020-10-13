// import './VideoItem.css';
import React from 'react';
import './Video.css'
const Video = ({ video, onVideoSelect }) => {
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	if (!video) {
    return <div>Loading...</div>;
	}
	
	// console.log("inside Video",video);
	return (
		<div>
      <div className="ui embed">
        <iframe className="videoContent" title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Video;