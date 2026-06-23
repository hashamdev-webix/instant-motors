import React, { useState } from 'react';

const Textarea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  rows = 4,
  required = false,
  disabled = false,
  className = '',
  helperText,
  maxLength,
  size = 'md',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(value?.length || 0);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e) => {
    setCharCount(e.target.value.length);
    if (onChange) onChange(e);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className={`
          w-full bg-white border rounded-lg
          transition-all duration-200
          resize-vertical
          ${sizeClasses[size]}
          ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : 'hover:border-gray-400'}
          ${error ? 'border-red-500' : isFocused ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-300'}
          focus:outline-none
        `}
        {...props}
      />
      
      <div className="flex justify-between mt-1">
        {error ? (
          <p className="text-red-500 text-sm">{error}</p>
        ) : helperText ? (
          <p className="text-gray-500 text-sm">{helperText}</p>
        ) : (
          <span />
        )}
        {maxLength && (
          <p className={`text-sm ${charCount > maxLength * 0.9 ? 'text-yellow-500' : 'text-gray-400'}`}>
            {charCount}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;