import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const LoadingFallback = () => (
  <div className="text-center p-4">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const LazyComponent = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default LazyComponent;