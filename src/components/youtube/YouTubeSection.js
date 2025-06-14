import React, { useState, useEffect } from 'react';
import YouTubeVideo from './YouTubeVideo';
import siteConfig from '../../config/siteConfig';

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get configuration from siteConfig with environment variable fallbacks
  const channelId = process.env.GATSBY_YOUTUBE_CHANNEL_ID || siteConfig.youtubeSection.channelId;
  const channelHandle = process.env.GATSBY_YOUTUBE_CHANNEL_HANDLE || siteConfig.youtubeSection.channelHandle;
  const fallbackVideos = siteConfig.youtubeSection.fallbackVideos;
  const maxVideos = siteConfig.youtubeSection.maxVideos;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        console.log("Attempting to fetch popular YouTube videos...");
        
        // Use the environment variable instead of hardcoded API keys
        const apiKey = process.env.GATSBY_YOUTUBE_API_KEY;
        
        if (!apiKey) {
          console.warn('YouTube API key not found in environment variables. Using fallback videos.');
          console.log('Make sure to set GATSBY_YOUTUBE_API_KEY in your environment variables');
          setVideos(fallbackVideos.slice(0, 3));
          setLoading(false);
          return;
        }
        
        try {
          // First try: Use channel search to find your channel
          let requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=relevance&maxResults=3&type=video`;
          
          console.log(`Attempting to fetch videos from channel: ${channelId}`);
          console.log('Request URL:', requestUrl);
          
          let response = await fetch(requestUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          });
          
          // If first attempt fails, try with viewCount ordering
          if (!response.ok) {
            console.log(`First attempt failed with ${response.status}, trying viewCount ordering...`);
            requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=viewCount&maxResults=3&type=video`;
            
            response = await fetch(requestUrl, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            });
          }
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('YouTube API Error Details:', {
              status: response.status,
              statusText: response.statusText,
              error: errorData
            });
            
            // Check if it's a quota exceeded error
            if (response.status === 403) {
              console.error('403 Error - This could be:');
              console.error('1. API key doesn\'t have YouTube Data API v3 enabled');
              console.error('2. Daily quota exceeded');
              console.error('3. Channel ID is incorrect');
              console.error('4. API key restrictions');
            }
            
            throw new Error(`YouTube API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
          }
          
          const data = await response.json();
          
          if (!data.items || data.items.length === 0) {
            console.warn('No videos found for channel. Using fallback videos.');
            console.log('API Response:', data);
            setVideos(fallbackVideos.slice(0, 3));
            setLoading(false);
            return;
          }
          
          console.log(`✅ Successfully fetched ${data.items.length} videos from your channel`);
          console.log('Video details:', data.items.map(item => ({
            title: item.snippet.title,
            videoId: item.id.videoId,
            channelTitle: item.snippet.channelTitle
          })));
          setVideos(data.items);
          setLoading(false);
          
        } catch (innerErr) {
          console.error('Error with YouTube API request:', innerErr.message);
          setVideos(fallbackVideos.slice(0, 3));
          setLoading(false);
        }
        
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        console.log("Switching to fallback videos due to error.");
        setVideos(fallbackVideos.slice(0, 3));
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section id="youtube" className="py-24 bg-[#faf9f6] dark:bg-slate-900 border-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {siteConfig.youtubeSection.title}
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="youtube" className="py-24 bg-[#faf9f6] dark:bg-slate-900 border-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {siteConfig.youtubeSection.title}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            {siteConfig.youtubeSection.description}
          </p>
          {error && <p className="text-amber-600 dark:text-amber-400 mt-2">{error}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <YouTubeVideo
              key={video.id.videoId}
              videoId={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              thumbnail={video.snippet.thumbnails?.high?.url || `https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`}
              publishedAt={new Date(video.snippet.publishedAt).toLocaleDateString()}
            />
          ))}
        </div>
        
        <div className="text-center mt-14 mb-8">
          <a 
            href={siteConfig.youtubeSection.channelUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0ea5e9] hover:bg-[#0284c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0ea5e9] transition-all duration-200"
          >
            Visit My YouTube Channel
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;