// Utility for handling fade-in animations of sections
export const initFadeInSections = () => {
  // Check if we're in the browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const sections = document.querySelectorAll('.fade-in-section');
  
  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once it's visible, no need to observe it anymore
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, fadeInOptions);
  
  sections.forEach(section => {
    fadeInObserver.observe(section);
  });

  return () => {
    // Cleanup function
    sections.forEach(section => {
      fadeInObserver.unobserve(section);
    });
  };
};