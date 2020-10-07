// import './VideoItem.css';
import React from 'react';

const Video = ({ video, onVideoSelect }) => {
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	if (!video) {
    return <div>Loading...</div>;
	}
	
	console.log("inside Video",video);
	return (
		<div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Video;