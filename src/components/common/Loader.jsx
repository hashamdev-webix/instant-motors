import React from 'react';

const Loader = ({ 
  fullScreen = false, 
  size = 'md', 
  variant = 'primary',
  text = 'Loading...',
  className = '',
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const variants = {
    primary: 'border-primary-600',
    white: 'border-white',
    gray: 'border-gray-600',
  };

  const LoaderContent = () => (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className={`
        animate-spin rounded-full border-4 border-t-transparent
        ${sizes[size] || sizes.md}
        ${variants[variant] || variants.primary}
      `} />
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        <LoaderContent />
      </div>
    );
  }

  return <LoaderContent />;
};

export default Loader;