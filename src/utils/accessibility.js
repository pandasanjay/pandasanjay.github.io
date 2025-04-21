// Skip link handler for keyboard navigation
export const handleSkipLinkClick = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.tabIndex = -1;
    element.focus();
  }
};

// Focus trap for modals and dialogs
export const createFocusTrap = (containerRef) => {
  const focusableElements = containerRef.current?.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (!focusableElements?.length) return;

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };

  return handleTabKey;
};