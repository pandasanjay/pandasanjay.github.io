import React from 'react';
import { handleSkipLinkClick } from '../utils/accessibility';

const SkipLink = () => (
  <a
    href="#main-content"
    className="skip-link"
    onClick={(e) => {
      e.preventDefault();
      handleSkipLinkClick('main-content');
    }}
  >
    Skip to main content
  </a>
);

export default SkipLink;