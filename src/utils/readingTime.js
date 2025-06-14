// Simple reading time calculator
export const calculateReadingTime = (text) => {
  if (!text) return '1 min read';
  
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);
  
  return `${readingTimeMinutes} min read`;
};
