import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';

const Dropdown = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  className = '',
  multiple = false,
  searchable = false,
  helperText,
  size = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDisplayValue = () => {
    if (multiple) {
      if (!value || value.length === 0) return placeholder;
      const selectedOptions = options.filter(opt => value.includes(opt.value));
      if (selectedOptions.length === 0) return placeholder;
      return selectedOptions.map(opt => opt.label).join(', ');
    }
    if (!value) return placeholder;
    const selected = options.find(opt => opt.value === value);
    return selected ? selected.label : placeholder;
  };

  const handleSelect = (option) => {
    if (multiple) {
      const newValue = value || [];
      if (newValue.includes(option.value)) {
        onChange({
          target: {
            name,
            value: newValue.filter(v => v !== option.value),
          },
        });
      } else {
        onChange({
          target: {
            name,
            value: [...newValue, option.value],
          },
        });
      }
    } else {
      onChange({
        target: {
          name,
          value: option.value,
        },
      });
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const filteredOptions = searchable
    ? options.filter(opt => 
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const isSelected = (optionValue) => {
    if (multiple) {
      return value && value.includes(optionValue);
    }
    return value === optionValue;
  };

  return (
    <div className={`w-full ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => !disabled && setIsFocused(false)}
        className={`
          w-full bg-white border rounded-lg
          flex items-center justify-between
          transition-all duration-200
          ${sizeClasses[size]}
          ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : 'hover:border-gray-400'}
          ${error ? 'border-red-500' : isFocused ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-300'}
        `}
      >
        <span className={`truncate ${(!value || (multiple && value.length === 0)) ? 'text-gray-400' : 'text-gray-900'}`}>
          {getDisplayValue()}
        </span>
        <ChevronDownIcon className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}

      {isOpen && !disabled && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {searchable && (
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const selected = isSelected(option.value);

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`
                      w-full px-4 py-2 text-left text-sm
                      flex items-center justify-between
                      hover:bg-gray-50 transition-colors
                      ${selected ? 'bg-primary-50 text-primary-700' : 'text-gray-900'}
                    `}
                  >
                    <span>{option.label}</span>
                    {selected && (
                      <CheckIcon className="h-5 w-5 text-primary-600" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;