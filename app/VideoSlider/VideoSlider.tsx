import './VideoSlider.css';

const VideoSlider = ({ videos }) => {
  return (
    <div className="video-slider">
      {videos.map((video, index) => (
        <div className={`video-card ${video.locked ? "locked" : ""}`} key={index}>
          <img className="video-thumbnail" src={video.thumbnailUrl} alt={video.title} />
          <h3 className="video-title">{video.title}</h3>

          {/* Verificar se progress não é null */}
          {video.progress !== null && !video.locked && (
            <div className="progress-bar">
              <div className="progress" style={{ width: `${video.progress}%` }}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoSlider;
