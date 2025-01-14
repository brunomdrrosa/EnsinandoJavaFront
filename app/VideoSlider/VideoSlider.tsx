import Image from 'next/image';
import './VideoSlider.css';

interface Video {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  progress: number | null;
  locked: boolean;
  technology: string;
}

interface VideoSliderProps {
  videos: Video[];
}

const VideoSlider = ({ videos }: VideoSliderProps) => {
  return (
    <div className="video-slider">
      {videos.map((video, index) => (
        <div className={`video-card ${video.locked ? "locked" : ""}`} key={index}>
          <Image className="video-thumbnail" src={video.thumbnailUrl} alt={video.title} width={300} height={200} unoptimized />
          <h3 className="video-title">{video.title}</h3>
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
