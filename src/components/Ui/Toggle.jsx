import React from 'react';
import { Switch } from '@headlessui/react';

const Toggle = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
  size = 'md',
  helperText,
}) => {
  const sizeClasses = {
    sm: {
      switch: 'w-9 h-5',
      thumb: 'h-4 w-4',
      translate: 'translate-x-4',
    },
    md: {
      switch: 'w-11 h-6',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5',
    },
    lg: {
      switch: 'w-14 h-8',
      thumb: 'h-7 w-7',
      translate: 'translate-x-6',
    },
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <Switch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            ${checked ? 'bg-primary-600' : 'bg-gray-200'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            relative inline-flex shrink-0 rounded-full
            transition-colors duration-200 ease-in-out
            ${sizeClasses[size].switch}
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          `}
        >
          <span className="sr-only">{label}</span>
          <span
            className={`
              ${checked ? sizeClasses[size].translate : 'translate-x-0.5'}
              pointer-events-none inline-block transform rounded-full
              bg-white shadow-lg ring-0 transition duration-200 ease-in-out
              ${sizeClasses[size].thumb}
            `}
          />
        </Switch>
        {label && (
          <span className={`text-sm font-medium text-gray-700 ${disabled ? 'opacity-50' : ''}`}>
            {label}
          </span>
        )}
      </div>
      {helperText && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
    </div>
  );
};

export default Toggle;