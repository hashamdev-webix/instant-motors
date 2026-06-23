import React from 'react';

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  error,
  disabled = false,
  className = '',
  size = 'md',
  helperText,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const labelSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex items-center h-5">
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className={`
              ${sizeClasses[size]}
              border-gray-300 text-primary-600
              focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              transition-colors duration-200
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              ${error ? 'border-red-500' : ''}
            `}
            {...props}
          />
        </div>
        {label && (
          <div className="flex-1">
            <label className={`${labelSizeClasses[size]} font-medium text-gray-700 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}>
              {label}
            </label>
            {helperText && (
              <p className="text-sm text-gray-500 mt-0.5">{helperText}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Radio;