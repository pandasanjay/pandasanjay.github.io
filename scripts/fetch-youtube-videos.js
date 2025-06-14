const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');

// Load environment variables from the correct path
const envPath = path.join(__dirname, '../.env.development');
console.log(`📁 Loading environment from: ${envPath}`);

if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
  console.log('✅ Environment file loaded');
} else {
  console.error('❌ Environment file not found:', envPath);
}

const API_KEY = process.env.GATSBY_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.GATSBY_YOUTUBE_CHANNEL_ID || 'UCtJw0kfXaXv-mJ61CJ-CCvA';

console.log('🔧 Configuration:');
console.log(`   API Key: ${API_KEY ? `${API_KEY.substring(0, 10)}...` : 'NOT SET'}`);
console.log(`   Channel ID: ${CHANNEL_ID}`);
console.log('');

async function fetchChannelVideos() {
  if (!API_KEY) {
    console.error('❌ No YouTube API key found. Please set GATSBY_YOUTUBE_API_KEY in .env.development');
    return null;
  }

  try {
    console.log(`🔍 Fetching videos from channel: ${CHANNEL_ID}`);
    
    // First, let's try to get popular videos by view count
    const requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=viewCount&maxResults=10&type=video`;
    
    console.log('📡 Making API request...');
    
    const response = await fetch(requestUrl);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ YouTube API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      if (response.status === 403) {
        console.error('💡 This could be:');
        console.error('   - API key doesn\'t have YouTube Data API v3 enabled');
        console.error('   - Daily quota exceeded');
        console.error('   - Channel ID is incorrect');
        console.error('   - API key restrictions');
      }
      
      return null;
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.warn('⚠️  No videos found for this channel');
      console.log('Response:', JSON.stringify(data, null, 2));
      return null;
    }
    
    console.log(`✅ Found ${data.items.length} videos`);
    
    // Format the videos for the fallback array
    const formattedVideos = data.items.slice(0, 6).map(video => ({
      id: { videoId: video.id.videoId },
      snippet: {
        title: video.snippet.title,
        description: video.snippet.description || `Learn about ${video.snippet.title}`,
        thumbnails: {
          high: { 
            url: video.snippet.thumbnails?.high?.url || 
                 video.snippet.thumbnails?.medium?.url ||
                 `https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`
          }
        },
        publishedAt: video.snippet.publishedAt
      }
    }));
    
    // Display the videos
    console.log('\n📺 Your YouTube Videos:');
    formattedVideos.forEach((video, index) => {
      console.log(`${index + 1}. ${video.snippet.title}`);
      console.log(`   Video ID: ${video.id.videoId}`);
      console.log(`   Published: ${new Date(video.snippet.publishedAt).toLocaleDateString()}`);
      console.log(`   URL: https://www.youtube.com/watch?v=${video.id.videoId}`);
      console.log('');
    });
    
    return formattedVideos;
    
  } catch (error) {
    console.error('❌ Error fetching videos:', error.message);
    return null;
  }
}

async function updateSiteConfig(videos) {
  if (!videos || videos.length === 0) {
    console.log('❌ No videos to update in siteConfig');
    return;
  }
  
  const siteConfigPath = path.join(__dirname, '../src/config/siteConfig.js');
  
  try {
    // Read the current siteConfig
    const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
    
    // Create the new fallback videos array (take first 3 for fallback)
    const fallbackVideos = videos.slice(0, 3);
    
    // Format the fallback videos as JavaScript code
    const fallbackVideosCode = JSON.stringify(fallbackVideos, null, 6)
      .replace(/"/g, '"')
      .replace(/^/gm, '    '); // Add proper indentation
    
    console.log('\n📝 Generating new fallback videos array...');
    console.log('Using these 3 videos as fallback:');
    fallbackVideos.forEach((video, index) => {
      console.log(`${index + 1}. ${video.snippet.title}`);
    });
    
    // Replace the fallbackVideos array in the config
    const updatedConfig = siteConfigContent.replace(
      /fallbackVideos:\s*\[[\s\S]*?\]/,
      `fallbackVideos: ${fallbackVideosCode}`
    );
    
    // Write the updated config back
    fs.writeFileSync(siteConfigPath, updatedConfig, 'utf8');
    
    console.log('✅ Successfully updated siteConfig.js with your actual YouTube videos!');
    console.log('🎉 Your fallback videos now show your real content');
    
  } catch (error) {
    console.error('❌ Error updating siteConfig:', error.message);
  }
}

async function main() {
  console.log('🚀 Fetching YouTube videos for fallback configuration...\n');
  
  const videos = await fetchChannelVideos();
  
  if (videos) {
    await updateSiteConfig(videos);
    
    console.log('\n📋 Next steps:');
    console.log('1. Review the updated fallback videos in src/config/siteConfig.js');
    console.log('2. Run "npm run develop" to see your actual videos');
    console.log('3. The site will show your real videos when API works, fallback when it doesn\'t');
  } else {
    console.log('\n❌ Could not fetch videos. Please check:');
    console.log('1. Your API key is correct and has YouTube Data API v3 enabled');
    console.log('2. Your channel ID is correct');
    console.log('3. You haven\'t exceeded your daily quota');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fetchChannelVideos, updateSiteConfig };
