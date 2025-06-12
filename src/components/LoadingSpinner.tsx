
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse mx-auto"></div>
        </div>
        <p className="text-white/70 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
