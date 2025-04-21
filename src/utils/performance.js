export const onRouteUpdate = ({ location, prevLocation }) => {
  // Prefetch adjacent pages when user visits a project or blog post
  if (location.pathname.includes('/projects/') || location.pathname.includes('/blogs/')) {
    // Add prefetch hints for navigation
    const linkElement = document.createElement('link');
    linkElement.rel = 'prefetch';
    linkElement.href = '/works/';
    document.head.appendChild(linkElement);
  }
};

export const shouldUpdateScroll = ({ routerProps, prevRouterProps } = {}) => {
  const location = routerProps?.location;
  const prevLocation = prevRouterProps?.location;

  // Implement smooth scrolling for anchor links
  if (location?.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Account for fixed header
        behavior: 'smooth'
      });
      return false;
    }
  }
  return true;
};