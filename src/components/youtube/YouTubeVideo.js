import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId, title, description, thumbnail, publishedAt }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [imgError, setImgError] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  // If thumbnail URL fails, use direct YouTube thumbnail URL
  const handleImgError = () => {
    setImgError(true);
  };

  // Get the correct thumbnail URL
  const getThumbnailUrl = () => {
    if (imgError || !thumbnail) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return thumbnail;
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 h-full flex flex-col">
      <div 
        className="relative w-full pt-[56.25%] cursor-pointer overflow-hidden" // 16:9 aspect ratio using padding trick
        onClick={() => setShowVideo(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {!showVideo ? (
          <>
            <img 
              src={getThumbnailUrl()} 
              alt={title}
              onError={handleImgError}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-30">
              <div className="w-16 h-16 rounded-full bg-[#0ea5e9] bg-opacity-90 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full">
            <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{truncateText(title, 60)}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 flex-1">{truncateText(description, 120)}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-slate-500 dark:text-slate-500">Published: {publishedAt}</span>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0ea5e9] hover:text-[#0284c7] text-sm font-medium transition-colors duration-200"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;