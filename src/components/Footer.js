import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-500 text-sm mb-4 md:mb-0">
          {data.copyright}
        </div>
        <div className="text-slate-500 text-sm">
          {data.tagline}
        </div>
      </div>
    </footer>
  );
};

export default Footer;