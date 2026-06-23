import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  highlight, 
  centered = true,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
        {highlight && (
          <span className="text-primary-600"> {highlight}</span>
        )}
      </h2>
    </div>
  );
};

export default SectionTitle;