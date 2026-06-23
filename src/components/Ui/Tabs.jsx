import React, { useState } from 'react';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'default', // default, pills, underline
  size = 'md',
  fullWidth = false,
}) => {
  const [active, setActive] = useState(activeTab || tabs[0]?.id);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const handleTabChange = (tabId) => {
    setActive(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const getTabStyles = (tabId) => {
    const isActive = active === tabId;
    
    if (variant === 'pills') {
      return `
        ${sizeClasses[size]}
        rounded-lg font-medium transition-all duration-200
        ${isActive 
          ? 'bg-primary-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
      `;
    }
    
    if (variant === 'underline') {
      return `
        ${sizeClasses[size]}
        font-medium border-b-2 transition-all duration-200
        ${isActive 
          ? 'border-primary-600 text-primary-600' 
          : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}
      `;
    }
    
    // Default variant
    return `
      ${sizeClasses[size]}
      rounded-lg font-medium transition-all duration-200
      ${isActive 
        ? 'bg-primary-50 text-primary-700' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
    `;
  };

  return (
    <div className={className}>
      <div className={`flex ${fullWidth ? 'w-full' : ''} gap-2 border-b border-gray-200`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`
              ${getTabStyles(tab.id)}
              ${fullWidth ? 'flex-1 justify-center' : ''}
              ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              flex items-center gap-2
            `}
            disabled={tab.disabled}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="ml-1 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        {tabs.find(tab => tab.id === active)?.content}
      </div>
    </div>
  );
};

export default Tabs;